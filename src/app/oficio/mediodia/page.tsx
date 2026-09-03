import { Metadata } from "next";
import { HourOffice } from "@/components/views/HourOffice";

export const metadata: Metadata = { title: "Oración del Mediodía – LOC 1928" };

export default function Mediodia() {
  return <HourOffice hour="mediodia" />;
}
