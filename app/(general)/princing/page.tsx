import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAY",
  description: "Pages princing",
};

export default function PrincingPage() {
  return (
    <>
      <span className="text-7xl">Princing Page</span>
    </>
  );
}
