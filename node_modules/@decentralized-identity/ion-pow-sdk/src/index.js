const fetch = require('cross-fetch');
const hash =  require('hash-wasm');


const buffer = require('buffer/').Buffer;

module.exports = class IonProofOfWork {
    static randomHexString() {
        const size = Math.floor(Math.random() * Math.floor(500));
        const randomString = [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        return buffer.from(randomString).toString('hex');
    }

    static async submitIonRequestUntilSuccess(getChallengeUri, solveChallengeUri, requestBody) {
        let result;
        while (result === undefined) {
            result = await this.submitIonRequest(getChallengeUri, solveChallengeUri, requestBody);
        };
    };

    static async submitIonRequest(getChallengeUri, solveChallengeUri, requestBody) {
        console.log(`Getting challenge from: ${getChallengeUri}`);
        const getChallengeResponse = await fetch(getChallengeUri, {
            mode: 'cors'
        });
        if (!getChallengeResponse.ok) {
            throw new Error('Get challenge service not available')
        }
        const challengeBody = await getChallengeResponse.json();
        console.log(challengeBody);

        const challengeNonce = challengeBody.challengeNonce;
        const largestAllowedHash = challengeBody.largestAllowedHash;
        const validDuration = challengeBody.validDurationInMinutes * 60 * 1000;
    
        let answerHash = '';
        let answerNonce = '';

        console.log(`Solving for body:\n${requestBody}`);
        const startTime = Date.now();
        do {
            answerNonce = this.randomHexString();
            answerHash = await hash.argon2id({
                password: buffer.from(answerNonce, 'hex').toString() + requestBody,
                salt: buffer.from(challengeNonce, 'hex'),
                parallelism: 1,
                iterations: 1,
                memorySize: 1000,
                hashLength: 32, // output size = 32 bytes
                outputType: 'hex',
            });
            console.log(answerHash);
            console.log(largestAllowedHash);
        } while (answerHash > largestAllowedHash && Date.now() - startTime < validDuration);

        if (Date.now() - startTime >  validDuration) {
            return;
        }

        console.log('3')
        const response = await fetch(solveChallengeUri, {
            method: 'POST',
            mode: 'cors',
            body: requestBody,
            headers: {
                'Challenge-Nonce': challengeNonce,
                'Answer-Nonce': answerNonce,
                'Content-Type': 'application/json'
            }
        });

        if (response.status >= 500) {
            console.log(`Unexpected 5xx response: ${await response.text()}`);
        } else if (response.status >= 400) {
            // 400 means bad request, so should retry with a new challenge
            console.log(`Bed request: ${await response.text()}`);
            console.log('Retrying with new challenge and difficulty');
        } else if (response.status >= 300) {
            console.log(`Unexpected 3xx response: ${await response.text()}`);
        } else {
            //success
            console.log(`Successful registration`);
            const responseText = await response.text();
            console.log(responseText);
            return responseText;
        };
    }
}
