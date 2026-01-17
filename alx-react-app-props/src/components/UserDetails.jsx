import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: '#333', marginBottom: '10px' }}>User Details</h2>
      <p style={{ fontSize: '16px', margin: '8px 0' }}>
        <strong>Name:</strong> {userData.name}
      </p>
      <p style={{ fontSize: '16px', margin: '8px 0' }}>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;