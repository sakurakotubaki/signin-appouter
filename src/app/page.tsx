import Link from "next/link";
import { createClient } from "./supabase/server";
import { redirect } from "next/dist/client/components/redirect";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user }} = await supabase.auth.getUser();

  if(user) return redirect("/dashboard");

  return (
    <div className="text-center mt-10">
      <Image
        src="/yume.png"
        alt="yume"
        width={150}
        height={150}
        className="mx-auto mb-5"
      />
      <h1 className="text-3xl font-bold text-red-500">Supabaseでログインの練習中。。。</h1>
      <div className="mt-5 text-lg">
        <Link href="/login">ログイン</Link>
      </div>
      <div className="mt-5 text-lg">
        <Link href="/signup">新規登録</Link>
      </div>
    </div>
  );
}
