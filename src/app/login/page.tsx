import { login } from "../auth/actions";

export default function LoginPage() {
    return(
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button formAction={login}>ログイン</button>
            </form>
        </div>
    )
}