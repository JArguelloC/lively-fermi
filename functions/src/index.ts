import * as admin from "firebase-admin";

admin.initializeApp();

export { createOrder } from "./orders/createOrder";
export { checkInventory } from "./products/checkInventory";
export { onCommentCreate } from "./news/onCommentCreate";
export { validateEmailDomain } from "./auth/validateEmailDomain";
