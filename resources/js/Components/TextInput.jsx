import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const TextInput = forwardRef(({ type = 'text', className = '', isFocused = false, placeholder, defaultValue, variant = 'primary', isError, ...props }, ref) => {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            defaultValue={defaultValue}
            // className={
            //     'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
            //     className
            // }
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none ${isError && 'input-error'} input-${variant} ${className}`}
            ref={input}
            placeholder={placeholder}
        />
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date', 'file']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool
}

// TextInput.displayName = 'TextInput'

export default TextInput