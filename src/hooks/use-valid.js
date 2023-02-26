import { useState } from 'react';

const useValid = (validation) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validation(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const onChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        onChangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useValid;