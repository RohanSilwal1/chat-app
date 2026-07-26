"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-16  md:py-32">
      <div className="flex flex-row justify-center items-center gap-x-2 ">
        <h1 className="text-3xl font-extrabold text-foreground">Welcome</h1>
        <Image
          src={"/logo10.svg"}
          height={20}
          width={250}
          alt="logo.svg"
          loading="eager"
          style={{
            height: "auto",
          }}
        />
      </div>
      <p className="font-semibold text-lg mt-2 text-muted-foreground">
        Sign in below (we'll increase your message limits if you do 😏)
      </p>
      <Button
        variant={"secondary"}
        className={
          "max-w-sm mt-5 w-full px-7 py-7 flex flex-row justify-center items-center cursor-pointer"
        }
        onClick={() =>
          signIn.social({
            provider: "github",
            callbackURL: "/",
          })
        }
      >
        <Image
          className=""
          src={"./github.svg"}
          height={20}
          width={50}
          alt="githubImage"
        />
        <span className="font-bold ml-2 ">Sign In with Github</span>
      </Button>
    </section>
  );
}

export default Page;
