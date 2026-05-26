import { jsx as _jsx } from "react/jsx-runtime";
export const Spinner = ({ size = 'md', className = '' }) => {
    const sizes = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-[3px]',
        lg: 'w-12 h-12 border-4',
    };
    return (_jsx("div", { className: `flex justify-center items-center ${className}`, children: _jsx("div", { className: `${sizes[size]} rounded-full animate-spin border-gray-700 border-t-yellow-500`, role: "status", "aria-label": "Loading" }) }));
};
export default Spinner;
