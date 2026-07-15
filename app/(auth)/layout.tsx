import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React, { Children, ReactNode } from "react";

async function AuthLayout({ children }: { children: ReactNode }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return redirect("/");
  }
  return <>{children}</>;
}

export default AuthLayout;
