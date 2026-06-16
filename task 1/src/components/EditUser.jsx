import { useContext, useState } from 'react';
import { UserContext } from './UserContext';

export default function EditUser() {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email, role });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h2>Update Information</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Developer">Developer</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
        </select>
        <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>Save Changes</button>
      </form>
    </div>
  );
}
