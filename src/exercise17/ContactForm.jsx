import useForm from './useForm';

const ContactForm = () => {
  const { values, handleChange } = useForm({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form Data:', values);
  };

  return (
    <div className="container mt-4">
      <div className="col-md-6">

        <h2 className="mb-4">Contact Form</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Name:
            </label>

            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Email:
            </label>

            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Phone:
            </label>

            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              City:
            </label>

            <input
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Message:
            </label>

            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

        </form>

      </div>
    </div>
  );
};

export default ContactForm;