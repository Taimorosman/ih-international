import { redirect } from "next/navigation";

export default function PlacementTestBookingPage() {
  redirect("/register?form=placement");
}
