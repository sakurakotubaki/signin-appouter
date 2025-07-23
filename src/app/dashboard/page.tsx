import { redirect } from 'next/navigation'
import { createClient } from "../supabase/server";
import { logout } from '../auth/actions';

export default async function DashboardPage() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return redirect("/");

    return (
        <div className='text-center mt-10'>
            <h1>Welcome to your dashboard, {user.email}!</h1>
            <form>

                <button formAction={logout}>Logout</button>
            </form>
        </div>
    )
}
