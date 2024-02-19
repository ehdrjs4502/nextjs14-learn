"use client";

import { SERVER_URL } from "@/constans";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    console.log("클릭");
    e.preventDefault();
    try {
      const response = await fetch(`${SERVER_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.clear();
        localStorage.setItem("id", data.id);
        router.push("/"); // 로그인 성공 시 홈페이지로 이동
        console.log(data);
      } else {
        console.error(data); // 로그인 실패 메시지 출력
        setIsInvalid(true);
      }
    } catch (error) {
      console.error("Error occurred:", error);
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
