import { create } from "zustand";

const useAuthProviderStore = create((set:any) => ({
    user: null,
    setUser: (user:any) => set({ user }),
    logout: (_:any) => set({ user: null }),
}));

export default useAuthProviderStore;
