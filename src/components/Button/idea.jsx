import React from 'react';
import './idea.css'; // Asegúrate de importar el archivo CSS correcto

function Idea() {
  return (
    <form className="RegistrationForm-form">
      <p className="RegistrationForm-title">Register</p>
      <p className="RegistrationForm-message">Signup now and get full access to our app.</p>
      <div className="RegistrationForm-flex">
        <label>
          <input required type="text" className="RegistrationForm-input" />
          <span>Firstname</span>
        </label>
        <label>
          <input required type="text" className="RegistrationForm-input" />
          <span>Lastname</span>
        </label>
      </div>
      <label>
        <input required type="email" className="RegistrationForm-input" />
        <span>Email</span>
      </label>
      <label>
        <input required type="password" className="RegistrationForm-input" />
        <span>Password</span>
      </label>
      <label>
        <input required type="password" className="RegistrationForm-input" />
        <span>Confirm password</span>
      </label>
      <button className="RegistrationForm-submit">Submit</button>
      <p className="RegistrationForm-signin">
        Already have an account? <a href="#">Sign in</a>
      </p>
    </form>
  );
}

export default Idea;
