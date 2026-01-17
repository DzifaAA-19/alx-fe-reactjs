import UserDetails from './UserDetails';

function UserInfo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>
        User Information
      </h2>
      <UserDetails />
    </div>
  );
}

export default UserInfo;