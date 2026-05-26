import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check } from 'lucide-react';
export default function CheckoutStepper({ steps, currentStepId }) {
    const currentStepIndex = steps.findIndex(step => step.id === currentStepId);
    return (_jsx("div", { className: "w-full mb-12", children: _jsxs("div", { className: "relative flex items-center justify-between w-full", children: [_jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-zinc-800 -z-10 rounded-full" }), _jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-indigo-500 -z-10 rounded-full transition-all duration-300 ease-in-out", style: { width: `${(currentStepIndex / (steps.length - 1)) * 100}%` } }), steps.map((step, index) => {
                    const isCompleted = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    return (_jsxs("div", { className: "relative flex flex-col items-center", children: [_jsx("div", { className: `w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300
                  ${isCompleted ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' :
                                    isCurrent ? 'bg-zinc-900 border-2 border-indigo-500 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]' :
                                        'bg-zinc-900 border-2 border-zinc-800 text-zinc-500'}`, children: isCompleted ? _jsx(Check, { className: "w-5 h-5" }) : index + 1 }), _jsx("span", { className: `absolute -bottom-8 w-24 text-center text-xs sm:text-sm font-medium transition-colors duration-300
                ${isCurrent ? 'text-indigo-400' : isCompleted ? 'text-zinc-300' : 'text-zinc-600'}`, children: step.label })] }, step.id));
                })] }) }));
}
