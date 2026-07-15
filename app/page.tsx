import { Button } from "@/components/ui/button";
import Image from "next/image";
import UserButton from "./modules/authentication/components/user-button";
import { currentUser } from "./modules/authentication/action";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <UserButton user={user} />
    </div>
  );
}
