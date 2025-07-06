import './App.css';
import { useEffect, useState } from 'react';
import { GetUserDetails } from './services/accountService';
import { addConnectivityListener, removeConnectivityListeners } from './utils/networkStatus';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    addConnectivityListener(
      () => alert('✅ Internet connection restored!'),
      () => alert('🚫 Internet disconnected.')
    );
    return () => {
      removeConnectivityListeners();
    };
  }, []);

  // Function to fetch user details from the API
  // This function uses the GetUserDetails service to fetch user data
  // and updates the state with the fetched data.
  const fetchUsers = async () => {
    setLoading(true);
    const data = await GetUserDetails();
    if (data?.status === 200 && data?.data?.length > 0) {
      setUsers(data.data);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Test Public API</h2>
        <button onClick={() => fetchUsers()}>Fetch Users</button>

        {loading && <p>Loading...</p>}

        {users?.length > 0 && (
          <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
            {users?.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
