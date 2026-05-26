import * as functions from "firebase-functions";
import * as dns from "dns";
import { promisify } from "util";

const resolveMx = promisify(dns.resolveMx);

// Lista básica de dominios desechables comunes
const disposableDomains = new Set([
  "mailinator.com", "10minutemail.com", "guerrillamail.com", "yopmail.com",
  "tempmail.com", "throwawaymail.com", "trashmail.com", "maildrop.cc",
  "dispostable.com", "nada.ltd", "getnada.com", "sharklasers.com"
]);

export const validateEmailDomain = functions.https.onCall(async (data, context) => {
  const email = data.email;
  if (!email || typeof email !== "string") {
    throw new functions.https.HttpsError("invalid-argument", "Email es requerido");
  }

  const parts = email.split("@");
  if (parts.length !== 2) {
    throw new functions.https.HttpsError("invalid-argument", "Formato de email inválido");
  }

  const domain = parts[1].toLowerCase();

  // 1. Verificar dominios desechables
  if (disposableDomains.has(domain)) {
    return { valid: false, reason: "El dominio de correo es temporal/desechable y no está permitido." };
  }

  // 2. Verificar registros MX
  try {
    const mxRecords = await resolveMx(domain);
    if (!mxRecords || mxRecords.length === 0) {
      return { valid: false, reason: "El dominio no puede recibir correos (sin registros MX)." };
    }
    
    return { valid: true };
  } catch (error: any) {
    if (error.code === "ENOTFOUND" || error.code === "ENODATA") {
      return { valid: false, reason: "El dominio del correo no existe o no tiene registros de correo configurados." };
    }
    console.error("DNS MX Lookup Error for", domain, error);
    // Si hay un timeout de red, asumimos válido para no bloquear usuarios reales.
    return { valid: true };
  }
});
