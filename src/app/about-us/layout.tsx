import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AboutUs",
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <h4>about-us 레이아웃</h4>
    </div>
  );
}
