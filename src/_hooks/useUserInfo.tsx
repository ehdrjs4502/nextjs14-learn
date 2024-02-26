import { create } from "zustand";

interface UserInfo {
  nickName: string;
}

interface UserState {
  userInfo: UserInfo;
  setUserInfo: (by: UserInfo) => void;
  deleteUserInfo: () => void;
}

const initialValue = { nickName: "" };

const useUserInfo = create<UserState>((set) => ({
  userInfo: initialValue,
  setUserInfo: (userInfo: UserInfo) => {
    set({ userInfo });
  },
  deleteUserInfo: () => {
    set({ userInfo: initialValue });
  },
}));
