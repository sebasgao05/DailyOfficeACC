import { Metadata } from "next";
import { HourOffice } from "@/components/views/HourOffice";

export const metadata: Metadata = { title: "Tercia – LOC 1928" };

export default function Tercia() {
  return <HourOffice hour="tercia" />;
}
