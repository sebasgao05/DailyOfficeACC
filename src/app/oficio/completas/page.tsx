import { Metadata } from "next";
import { HourOffice } from "@/components/HourOffice";

export const metadata: Metadata = { title: "Completas – LOC 1928" };

export default function Completas() {
  return <HourOffice hour="completas" />;
}
