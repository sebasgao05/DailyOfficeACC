import { Metadata } from "next";
import { HourOffice } from "@/components/HourOffice";

export const metadata: Metadata = { title: "Nona – LOC 1928" };

export default function Nona() {
  return <HourOffice hour="nona" />;
}
