import { jsx as _jsx } from "react/jsx-runtime";
export const Card = ({ className = '', variant = 'dark', children, ...props }) => {
    const baseStyles = 'rounded-xl overflow-hidden';
    const variants = {
        dark: 'bg-gray-900 border border-gray-800',
        glass: 'bg-gray-900/40 backdrop-blur-md border border-gray-700/50 shadow-xl',
    };
    return (_jsx("div", { className: `${baseStyles} ${variants[variant]} ${className}`, ...props, children: children }));
};
export default Card;
