import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div style={{ 
      padding: '40px 20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        fontSize: '42px',
        color: '#2c3e50',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        Contact Us
      </h1>
      
      <p style={{
        textAlign: 'center',
        color: '#555',
        marginBottom: '30px',
        fontSize: '18px'
      }}>
        Have questions? We'd love to hear from you. Send us a message!
      </p>

      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#f9f9f9',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block',
            marginBottom: '8px',
            color: '#2c3e50',
            fontWeight: 'bold'
          }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ 
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block',
            marginBottom: '8px',
            color: '#2c3e50',
            fontWeight: 'bold'
          }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ 
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block',
            marginBottom: '8px',
            color: '#2c3e50',
            fontWeight: 'bold'
          }}>
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ 
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>

        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '18px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;