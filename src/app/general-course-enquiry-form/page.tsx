import { redirect } from "next/navigation";

export default function GeneralCourseEnquiryPage() {
  redirect("/register?form=enquiry");
}
