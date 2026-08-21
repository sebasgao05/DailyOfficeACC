import { redirect } from "next/navigation";

// Auto-redirect to Morning Prayer (the default office)
export default function OficioDiario() {
  redirect("/oficio/oracion-matutina");
}
