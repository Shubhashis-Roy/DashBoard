import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>After Authenticated </div>
      <div className="">
        {/* <SignInButton /> */}
        <UserButton />
      </div>
    </div>
  );
}
