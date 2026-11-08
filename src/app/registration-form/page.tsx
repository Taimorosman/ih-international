import { redirect } from "next/navigation";

export default function RegistrationFormPage() {
  redirect("/register?form=student");
}
