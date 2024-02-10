"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>ㅎㅇ</h2>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}
