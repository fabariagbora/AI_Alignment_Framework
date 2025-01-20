# ion-pow-sdk

This repo contains the sdk for ION proof of work.

### How To Use It

1. npm install ion-pow-sdk
1. `const IonProofOfWork = require('ion-pow-sdk');` or `import IonProofOfWork from 'ion-pow-sdk'`
1. call `IonProofOfWork.submitIonRequestUntilSuccess(getChallengeUri, solveChallengeUri, JSON.stringify(requestBody))`
1. The SDK will get the challenge, solve it, and submit the request for you.