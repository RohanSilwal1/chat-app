"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currentUser } from "../../authentication/action";
import { PlusIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { use, useState } from "react";
import UserButton from "../../authentication/components/user-button";

type ChatSidebarProps = {
  user: Awaited<ReturnType<typeof currentUser>>;
};

function ChatSidebar({ user }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="flex h-screen flex-col w-64 bg-sidebar border-2 border-border">
      <div className="flex items-center justify-center border-b border-sidebar-border">
        <div>
          <Image
            width={200}
            height={200}
            alt="logo image"
            loading="eager"
            src={"/logo10.svg"}
            style={{
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="p-4 ">
        <Link href={"/"} />
        <Button className="w-full text-center text-md h-10">
          <PlusIcon className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>
      <div className="px-4 pb-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search your chat..."
            className="pl-9 bg-sidebar-accent border-sidebar-b pr-8"
            value={searchQuery}
            onChange={handleQueryChange}
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-2">
        <div className=" text-center text-muted-foreground text-sm py-8">
          No chats yet
        </div>
      </div>
      <div className="flex p-4 items-center gap-3 border-t border-sidebar-border">
        <UserButton user={user} />
        <span className="flex-1 text-sm text-sidebar-foreground truncate">
          {user?.email}
        </span>
      </div>
    </div>
  );
}

export default ChatSidebar;
