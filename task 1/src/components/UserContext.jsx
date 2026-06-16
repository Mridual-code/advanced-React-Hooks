import { createContext, useState } from 'react';

// 1. Create the Context
export const UserContext = createContext(null);

// 2. Create the Provider Component
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'Developer'
  });

  // Function to let child components update the state
  const updateUser = (newDetails) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newDetails
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}