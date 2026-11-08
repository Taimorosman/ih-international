import { redirect } from "next/navigation";

export default function TeacherApplicationPage() {
  redirect("/register?form=teacher");
}
