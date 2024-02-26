"use client";

import useUserInfo from "@/_hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "../_api/login";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const { setUserInfo } = useUserInfo(); // zustand 라이브러리 사용
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      if (response) {
        setUserInfo(response); // return 값 전역 상태인 userInfo 상태에 저장
        router.push("/"); // 로그인 성공 시 홈페이지로 이동
      } else {
        console.error(response); // 로그인 실패 메시지 출력
        setIsInvalid(true);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("에러가 발생했습니다.");
    }
  };

  return (
    <div>
      <h4>Login</h4>
      <span>test 계정으로 로그인하실 수 있습니다.</span>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} placeholder="test" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="1234"
          />
        </div>
        <button type="submit">Login</button>
        {isInvalid && <span>유효하지 않은 ID입니다.</span>}
      </form>
    </div>
  );
}
