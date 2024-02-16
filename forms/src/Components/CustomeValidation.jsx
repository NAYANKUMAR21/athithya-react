import React, { useState } from 'react';

function CustomeValidation() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('Please enter your');
  const handleChange = (event) => {
    let name = event.target.name;
    if (name == 'firstName') {
      setfirstName(event.target.value);
    } else if (name == 'lastName') {
      setlastName(event.target.value);
    } else if (name == 'email') {
      setEmail(event.target.value);
    } else {
      setPhone(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, phone);
    if (firstName == ' ') {
      setError(error + 'first name');
    } else if (lastName == ' ') {
      setError(error + 'last name');
    } else if (error == 'email') {
      setError(error + 'email');
    } else if (phone == ' ') {
      setError(error + 'phone');
    }
  };
  return (
    <div>
      {error.length > 17 ? error : null}
      <form onSubmit={handleSubmit}>
        <div className="inputParent">
          <input
            type="text"
            placeholder="First Name.."
            name="firstName"
            className="ahtithya"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="inputParent">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            required={true}
            onChange={handleChange}
          />
        </div>
        <div className="inputParent">
          <input
            type="email"
            placeholder="Email.."
            name="email"
            required={true}
            onChange={handleChange}
          />
        </div>
        <div className="inputParent">
          <input
            type="tel"
            placeholder="Number"
            name="phone"
            required={true}
            onChange={handleChange}
            minLength={10}
            maxLength={10}
          />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default CustomeValidation;
