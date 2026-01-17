import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  // Get userData from Context instead of props
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '2px solid #3498db',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      backgroundColor: '#f0f8ff'
    }}>
      <h3 style={{ color: '#3498db' }}>User Details</h3>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;