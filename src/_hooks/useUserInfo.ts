import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";

interface UserInfo {
  id: string;
}

interface UserState {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;
  deleteUserInfo: () => void;
}

const initialValue: UserInfo = { id: "" };

const useUserInfo = create<UserState>()(
  persist(
    (set) => ({
      userInfo: initialValue,
      setUserInfo: (userInfo: UserInfo) => {
        set({ userInfo });
      },
      deleteUserInfo: () => {
        set({ userInfo: initialValue });
      },
    }),
    {
      name: "id",
      storage: createJSONStorage(() => localStorage), // 기본적으로 localStorage가 선택됨 (localStorage에 저장할거면 이 줄 안써도 됨)
    }
  )
);

export default useUserInfo;
