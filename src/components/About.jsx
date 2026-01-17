function About() {
  return (
    <div style={{ 
      padding: '40px 20px',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        fontSize: '42px',
        color: '#2c3e50',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        About Us
      </h1>
      <p style={{ 
        fontSize: '18px',
        color: '#555',
        lineHeight: '1.8',
        marginBottom: '20px'
      }}>
        Our company has been providing top-notch services since 1990. 
        We specialize in various fields including technology, marketing, 
        and consultancy.
      </p>
      <p style={{ 
        fontSize: '18px',
        color: '#555',
        lineHeight: '1.8'
      }}>
        With a team of experienced professionals, we pride ourselves on 
        delivering innovative solutions that help our clients achieve 
        their business goals. Our commitment to excellence and customer 
        satisfaction sets us apart in the industry.
      </p>
      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#ecf0f1',
        borderRadius: '8px'
      }}>
        <h3 style={{ color: '#2c3e50' }}>Our Mission</h3>
        <p style={{ color: '#555', lineHeight: '1.6' }}>
          To provide exceptional services that exceed expectations and 
          create lasting value for our clients.
        </p>
      </div>
    </div>
  );
}

export default About;