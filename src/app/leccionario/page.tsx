import { Metadata } from "next";
import { LeccionarioView } from "@/components/LeccionarioView";

export const metadata: Metadata = {
  title: "Leccionario – LOC 1928",
};

export default function LeccionarioPage() {
  return (
    <div>
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Leccionario
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        Salmos y Lecciones para el Año Cristiano
      </p>
      <LeccionarioView />
    </div>
  );
}
