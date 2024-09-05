import { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const updateUser = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
