'use client';

import { useState, createContext, useContext } from 'react';

// 正式專案中通常不會把 password 存在前端的 user 物件，密碼驗證應該交給後端處理
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const userList = [
  {
    id: 1,
    name: 'JK',
    email: 'jk@test.com',
    password: '123456',
  },
  {
    id: 2,
    name: 'JK2',
    email: 'jk2@test.com',
    password: '123456',
  },
];

type LoginResult =
  | {
      success: true;
      userName: string;
    }
  | {
      success: false;
    };

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => LoginResult;
  logout: () => void;
  isLoggedIn: boolean;
}

const UserContext = createContext<UserContextType | null>(null);
UserContext.displayName = 'UserContext';

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>(userList);
  const [user, setUser] = useState<User | null>(null);
  const isLoggedIn = Boolean(user);

  const login = (email: string, password: string): LoginResult => {
    const foundUser = users.find((user) => user.email === email);
    if (foundUser && foundUser.password === password) {
      setUser(foundUser);
      return { success: true, userName: foundUser.name };
    } else {
      return { success: false };
    }
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          login,
          logout,
          isLoggedIn,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw Error('it must be used within UserProvider');
  }
  return context;
};
