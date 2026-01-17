import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ 
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#007bff', marginBottom: '20px' }}>
          User Profile with Context API
        </h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
