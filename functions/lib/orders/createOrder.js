"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const functions = require("firebase-functions");
exports.createOrder = functions.https.onCall(async (data, context) => {
    // TODO: Implement order creation logic
    return { status: "success", message: "Order creation shell" };
});
//# sourceMappingURL=createOrder.js.map