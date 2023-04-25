export default function Label({ value, forInput, className = '', children, ...props }) {
    return (
        <label {...props} htmlFor={forInput} className={`text-base block mb-2 dark:text-gray-300 ` + className}>
            {value ? value : children}
        </label>
    );
}
