// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Contact()
// {
//     const navigate=useNavigate()
//     console.log(navigate)
//     return(
//         <>
//         <h1>Contact Page</h1>
//         <p>
//         <button onClick={()=>navigate("/Aboutus")}>About us</button>
//         <button onClick={()=>navigate("/")}>Home</button>
//         <button onClick={()=>navigate("/Product")}>Products</button>
//       </p>
//       </>
//     )
// }
import React, { useState } from 'react';
import './Contact.css'; 

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && message) {
      const newSubmission = { name, email, message };
      setSubmissions([...submissions, newSubmission]);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className='contact-button'>Submit</button>
      </form>

      <h3>Contact Messages</h3>
      {submissions.length > 0 ? (
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr key={index}>
                <td>{submission.name}</td>
                <td>{submission.email}</td>
                <td>{submission.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No messages submitted yet.</p>
      )}
    </div>
  );
}
