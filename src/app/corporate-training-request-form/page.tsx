import { redirect } from "next/navigation";

export default function CorporateTrainingRequestPage() {
  redirect("/register?form=corporate");
}
