import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.fullName.length <= 5 || !isValidEmail(formData.email)) {
      setError("Por favor verifique su información nuevamente");
      setSuccessMessage("");
    } else {
      setError("");
      setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuanto antes vía email.`);
      console.log("Datos enviados:", formData);
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ width: "300px" }}>
        <div>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Nombre completo"
            value={formData.fullName}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>
        <button type="submit" style={{ width: "103%" }}>
          Enviar
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success" style={{ margin: "0px" }}>{successMessage}</p>}
    </div>
  );
};

export default Form;



