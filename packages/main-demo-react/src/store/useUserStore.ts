import { create } from "zustand";

type User = {
  id: number;
  email: string;
  nom: string;
};

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
};

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));

export default useUserStore;
