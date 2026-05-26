import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
export const Input = forwardRef(({ className = '', label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return (_jsxs("div", { className: "w-full flex flex-col gap-1.5", children: [label && (_jsx("label", { htmlFor: inputId, className: "text-sm font-medium text-gray-300", children: label })), _jsx("input", { ref: ref, id: inputId, className: `flex h-10 w-full rounded-md border bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 disabled:cursor-not-allowed disabled:opacity-50 transition-colors ${error
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-gray-700 focus:border-yellow-500 focus:ring-yellow-500/20'} ${className}`, ...props }), error && (_jsx("p", { className: "text-sm text-red-500", children: error }))] }));
});
Input.displayName = 'Input';
export default Input;
