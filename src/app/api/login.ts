import { SERVER_URL } from "@/constans";

interface FormData {
  id: string | undefined;
  pw: string | undefined;
}

export async function login(formData: FormData) {
  const response = await fetch(`${SERVER_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) return response.json();

  return false;
}
