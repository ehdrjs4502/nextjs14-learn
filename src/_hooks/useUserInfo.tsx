import { create } from "zustand";

interface UserInfo {
  id: string;
}

interface UserState {
  userInfo: UserInfo;
  setUserInfo: (by: UserInfo) => void;
  deleteUserInfo: () => void;
}

const initialValue = { id: "" };

const useUserInfo = create<UserState>((set) => ({
  userInfo: initialValue,
  setUserInfo: (userInfo: UserInfo) => {
    set({ userInfo });
  },
  deleteUserInfo: () => {
    set({ userInfo: initialValue });
  },
}));

export default useUserInfo;
