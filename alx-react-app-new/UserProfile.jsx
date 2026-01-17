function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '15px', 
      margin: '15px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>
        {props.name}
      </h2>
      <p style={{ fontSize: '16px', marginBottom: '8px' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#333' }}>
          {props.age}
        </span>
      </p>
      <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
        Bio: {props.bio}
      </p>
    </div>
  )
}

export default UserProfile
EOF
