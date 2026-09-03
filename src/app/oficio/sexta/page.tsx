import { Metadata } from "next";
import { HourOffice } from "@/components/HourOffice";

export const metadata: Metadata = { title: "Sexta – LOC 1928" };

export default function Sexta() {
  return <HourOffice hour="sexta" />;
}
