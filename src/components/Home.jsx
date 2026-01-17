function Home() {
  return (
    <div style={{ 
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#f0f8ff',
      minHeight: '80vh'
    }}>
      <h1 style={{ 
        fontSize: '48px',
        color: '#2c3e50',
        marginBottom: '20px'
      }}>
        Welcome to Our Company
      </h1>
      <p style={{ 
        fontSize: '20px',
        color: '#555',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        We are dedicated to delivering excellence in all our services. 
        With over 30 years of experience, we bring innovation and quality 
        to every project we undertake.
      </p>
      <button style={{
        marginTop: '30px',
        padding: '15px 30px',
        fontSize: '18px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Learn More
      </button>
    </div>
  );
}

export default Home;