import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-card">
      <h2>Active Profile</h2>
      <div className="profile-line"><strong>Name:</strong> {user.name}</div>
      <div className="profile-line"><strong>Email:</strong> {user.email}</div>
      <div className="profile-line"><strong>Role:</strong> {user.role}</div>
    </div>
  );
}
