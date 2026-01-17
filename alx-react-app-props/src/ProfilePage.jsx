import UserInfo from './UserInfo';

function ProfilePage() {
  // No props needed anymore!
  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Profile Page
      </h1>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;