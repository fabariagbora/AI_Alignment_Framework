"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployments = exports.EthereumDIDRegistry = exports.Errors = exports.interpretIdentifier = exports.identifierMatcher = exports.verificationMethodTypes = exports.attrTypes = exports.delegateTypes = exports.EthrDidController = exports.stringToBytes32 = exports.bytes32toString = exports.getResolver = exports.REGISTRY = void 0;
const resolver_1 = require("./resolver");
Object.defineProperty(exports, "getResolver", { enumerable: true, get: function () { return resolver_1.getResolver; } });
const controller_1 = require("./controller");
Object.defineProperty(exports, "EthrDidController", { enumerable: true, get: function () { return controller_1.EthrDidController; } });
const helpers_1 = require("./helpers");
Object.defineProperty(exports, "bytes32toString", { enumerable: true, get: function () { return helpers_1.bytes32toString; } });
Object.defineProperty(exports, "REGISTRY", { enumerable: true, get: function () { return helpers_1.DEFAULT_REGISTRY_ADDRESS; } });
Object.defineProperty(exports, "Errors", { enumerable: true, get: function () { return helpers_1.Errors; } });
Object.defineProperty(exports, "identifierMatcher", { enumerable: true, get: function () { return helpers_1.identifierMatcher; } });
Object.defineProperty(exports, "interpretIdentifier", { enumerable: true, get: function () { return helpers_1.interpretIdentifier; } });
Object.defineProperty(exports, "delegateTypes", { enumerable: true, get: function () { return helpers_1.legacyAlgoMap; } });
Object.defineProperty(exports, "attrTypes", { enumerable: true, get: function () { return helpers_1.legacyAttrTypes; } });
Object.defineProperty(exports, "stringToBytes32", { enumerable: true, get: function () { return helpers_1.stringToBytes32; } });
Object.defineProperty(exports, "verificationMethodTypes", { enumerable: true, get: function () { return helpers_1.verificationMethodTypes; } });
const EthereumDIDRegistry_json_1 = __importDefault(require("./config/EthereumDIDRegistry.json"));
Object.defineProperty(exports, "EthereumDIDRegistry", { enumerable: true, get: function () { return EthereumDIDRegistry_json_1.default; } });
var deployments_1 = require("./config/deployments");
Object.defineProperty(exports, "deployments", { enumerable: true, get: function () { return deployments_1.deployments; } });
//# sourceMappingURL=index.js.map