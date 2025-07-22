import Link from "next/link";
import { createClient } from "./supabase/server";
import { redirect } from "next/dist/client/components/redirect";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user }} = await supabase.auth.getUser();

  if(user) return redirect("/dashboard");

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500">Hello</h1>
      <div>
        <Link href="/login">Login</Link>
      </div>
      <div>
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
