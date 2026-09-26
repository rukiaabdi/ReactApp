import { useReducer } from 'react';

const initialState = {
  step: 1,
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }
};

const reducer = (state, action) => {
  switch (action.type) {

    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      };

    case 'NEXT_STEP':
      return {
        ...state,
        step: state.step + 1
      };

    case 'PREV_STEP':
      return {
        ...state,
        step: state.step - 1
      };

    case 'RESET_FORM':
      return initialState;

    default:
      return state;
  }
};

const MultiStepForm = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Registration successful!');
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div>

      <h1>Registration Form</h1>

      <p>Step {state.step} of 3</p>

      {/* Step 1 */}
      {state.step === 1 && (
        <div>
          <h2>Profile</h2>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={state.formData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={state.formData.lastName}
            onChange={handleChange}
          />

          <br />

          <button onClick={() => dispatch({ type: 'NEXT_STEP' })}>
            Next
          </button>
        </div>
      )}

      {/* Step 2 */}
      {state.step === 2 && (
        <div>
          <h2>Contact</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={state.formData.phone}
            onChange={handleChange}
          />

          <br />

          <button onClick={() => dispatch({ type: 'PREV_STEP' })}>
            Back
          </button>

          <button onClick={() => dispatch({ type: 'NEXT_STEP' })}>
            Next
          </button>
        </div>
      )}

      {/* Step 3 */}
      {state.step === 3 && (
        <div>
          <h2>Review</h2>

          <p>First Name: {state.formData.firstName}</p>
          <p>Last Name: {state.formData.lastName}</p>
          <p>Email: {state.formData.email}</p>
          <p>Phone: {state.formData.phone}</p>

          <button onClick={() => dispatch({ type: 'PREV_STEP' })}>
            Edit
          </button>

          <button onClick={handleSubmit}>
            Confirm
          </button>

          <button onClick={() => dispatch({ type: 'RESET_FORM' })}>
            Cancel
          </button>
        </div>
      )}

    </div>
  );
};

export default MultiStepForm;