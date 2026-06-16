import { UserProvider } from './components/UserContext';
import UserProfile from './components/UserProfile';
import EditUser from './components/EditUser';

export default function App() {
  return (
    <UserProvider>
      <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
        <h1>React useContext Lab</h1>
        <UserProfile />
        <EditUser />
      </div>
    </UserProvider>
  );
}
