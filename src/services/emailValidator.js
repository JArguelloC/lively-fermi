/**
 * Email Domain Validator - Frontend version
 * Valida emails sin necesidad de Cloud Functions
 */
// Lista básica de dominios desechables comunes
const DISPOSABLE_DOMAINS = new Set([
    "mailinator.com", "10minutemail.com", "guerrillamail.com", "yopmail.com",
    "tempmail.com", "throwawaymail.com", "trashmail.com", "maildrop.cc",
    "dispostable.com", "nada.ltd", "getnada.com", "sharklasers.com",
    "temp-mail.io", "mytrashmail.com", "fakeinbox.com", "trashmail.io",
    "mailnesia.com", "minutemail.com", "spam4.me", "guerrillamail.co.uk"
]);
/**
 * Valida que un email tenga un dominio permitido
 * No valida registros MX (requeriría backend)
 */
export const validateEmailDomain = (email) => {
    if (!email || typeof email !== "string") {
        return {
            valid: false,
            reason: "El correo electrónico es obligatorio"
        };
    }
    const trimmedEmail = email.trim();
    // Formato básico
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(trimmedEmail)) {
        return {
            valid: false,
            reason: "Formato de email inválido (ej. correo@dominio.com)"
        };
    }
    const parts = trimmedEmail.split("@");
    if (parts.length !== 2) {
        return {
            valid: false,
            reason: "Formato de email inválido"
        };
    }
    const domain = parts[1].toLowerCase();
    // Verificar dominios desechables
    if (DISPOSABLE_DOMAINS.has(domain)) {
        return {
            valid: false,
            reason: "El dominio de correo es temporal/desechable y no está permitido. Por favor usa un correo de verdad (Gmail, Outlook, Yahoo, etc.)"
        };
    }
    // Si pasa todas las validaciones
    return { valid: true };
};
/**
 * Validar múltiples emails (para listas)
 */
export const validateEmailBatch = (emails) => {
    return emails.map(email => validateEmailDomain(email));
};
