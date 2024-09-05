import { createContext, useState } from "react";

type User = {
  id: number;
  email: string;
  nom: string;
};

type UserContextType = {
  user: User | undefined;
  updateUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const updateUser = (user: User) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
