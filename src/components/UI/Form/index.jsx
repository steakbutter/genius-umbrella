import { useState } from 'react';
import './style.css';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Email is invalid')
            return;
        }
        alert (`Message sent ${name}`);
        
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <div className="container text-center">
        <h1>Hello {name}</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />
          <button type="submit">Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
}

export default Form;