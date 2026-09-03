import { Metadata } from "next";
import { HourOffice } from "@/components/views/HourOffice";

export const metadata: Metadata = { title: "Prima – LOC 1928" };

export default function Prima() {
  return <HourOffice hour="prima" />;
}
