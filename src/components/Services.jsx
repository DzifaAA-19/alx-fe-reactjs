function Services() {
  const services = [
    {
      title: 'Technology Consulting',
      description: 'Expert advice on technology strategy and implementation'
    },
    {
      title: 'Market Analysis',
      description: 'Comprehensive market research and competitive analysis'
    },
    {
      title: 'Product Development',
      description: 'End-to-end product development and launch services'
    }
  ];

  return (
    <div style={{ 
      padding: '40px 20px',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        fontSize: '42px',
        color: '#2c3e50',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        Our Services
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {services.map((service, index) => (
          <div key={index} style={{
            padding: '25px',
            backgroundColor: '#fff',
            border: '2px solid #3498db',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s'
          }}>
            <h3 style={{ 
              color: '#3498db',
              marginBottom: '15px',
              fontSize: '24px'
            }}>
              {service.title}
            </h3>
            <p style={{ 
              color: '#555',
              lineHeight: '1.6'
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;