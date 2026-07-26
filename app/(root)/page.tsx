import { currentUser } from "../modules/authentication/action";
import UserButton from "../modules/authentication/components/user-button";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <UserButton user={user} />
    </div>
  );
}
