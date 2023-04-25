import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
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

export default function Input({ type = 'text', className = '', isFocused = false, placeholder, defaultValue, variant = 'primary', isError, ...props }, ref) {
    // const input = ref ? ref : useRef();
    const input = useRef();

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
            className={`rounded-2xl py-[13px] px-7 w-full ${isError && 'input-error'} input-${variant} ${className}`}
            ref={input}
            placeholder={placeholder}
        />
    );
};



// Input.displayName = 'Input'

// export default Input