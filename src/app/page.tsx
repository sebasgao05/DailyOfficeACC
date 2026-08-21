import { redirect } from "next/navigation";

// Home page redirects directly to Morning Prayer (the default view like commonprayeronline.com)
export default function Home() {
  redirect("/oficio/oracion-matutina");
}
