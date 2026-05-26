"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmailDomain = exports.onCommentCreate = exports.checkInventory = exports.createOrder = void 0;
const admin = require("firebase-admin");
admin.initializeApp();
var createOrder_1 = require("./orders/createOrder");
Object.defineProperty(exports, "createOrder", { enumerable: true, get: function () { return createOrder_1.createOrder; } });
var checkInventory_1 = require("./products/checkInventory");
Object.defineProperty(exports, "checkInventory", { enumerable: true, get: function () { return checkInventory_1.checkInventory; } });
var onCommentCreate_1 = require("./news/onCommentCreate");
Object.defineProperty(exports, "onCommentCreate", { enumerable: true, get: function () { return onCommentCreate_1.onCommentCreate; } });
var validateEmailDomain_1 = require("./auth/validateEmailDomain");
Object.defineProperty(exports, "validateEmailDomain", { enumerable: true, get: function () { return validateEmailDomain_1.validateEmailDomain; } });
//# sourceMappingURL=index.js.map