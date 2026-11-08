import { redirect } from "next/navigation";

export default function ContactUsPage() {
  redirect("/register?form=contact");
}
