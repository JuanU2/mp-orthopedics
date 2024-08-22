import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }).catch((error) => {
      console.error('FAILED...', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
        <label ><h1><strong>Kontaktujte ma:</strong></h1></label>
      <label style={labelStyle}>Meno</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <label style={labelStyle}>E-mailová adresa</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <label style={labelStyle}>Správa</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        style={textareaStyle}
      />
      <button type="submit" style={buttonStyle}>Send</button>
    </form>
  );
};

const formStyle: any = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  maxWidth: '400px',
  margin: 'auto'
};

const labelStyle:any = {
  marginBottom: '5px'
};

const inputStyle:any = {
  marginBottom: '10px',
  padding: '10px',
  fontSize: '16px'
};

const textareaStyle:any = {
  marginBottom: '10px',
  padding: '10px',
  fontSize: '16px',
  height: '100px'
};

const buttonStyle:any = {
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  cursor: 'pointer'
};

export default ContactForm;
