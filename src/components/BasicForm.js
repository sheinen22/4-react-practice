import useValid from "../hooks/use-valid";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    onChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useValid((value) => value.trim() !== "");

  const {
    value: enteredLast,
    isValid: enteredLastIsValid,
    hasError: enteredLastHasError,
    onChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    reset: resetLastInput,
  } = useValid((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    onChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useValid((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredLastIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredLastIsValid || !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetLastInput();
    resetEmailInput();
  }

  const nameClasses = enteredNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastClasses = enteredLastHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = enteredEmailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {enteredNameHasError && <p className='error-text'>Please enter your first name.</p>}
        </div>
        <div className={lastClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={enteredLast}
          />
          {enteredLastHasError && <p className='error-text'>Please enter your last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailHasError && <p className='error-text'>Please enter a valid E-Mail address.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
