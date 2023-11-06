import useForm from "../hooks/useForm";

function UseFormComponent() {
  const { values, handleChange } = useForm({ name: "", email: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default UseFormComponent;
