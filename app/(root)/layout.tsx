import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React, { Children } from "react";
import ChatSidebar from "../modules/chat/components/chat-sidebar";
import { currentUser } from "../modules/authentication/action";
import Headers from "../modules/chat/components/headers";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = await currentUser();
  if (!session) {
    return redirect("/sign-in");
  }
  return (
    <div className="flex h-screen overflow-hidden">
      {<ChatSidebar user={user} />}
      <main className="flex-1 overflow-hidden">
        <Headers />
        {children}
      </main>
    </div>
  );
}
