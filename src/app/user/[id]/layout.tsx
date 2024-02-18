import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User",
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
