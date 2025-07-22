import { signup } from "../auth/actions";

export default function SignUpPage() {
    return(
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button formAction={signup}>Sign Up</button>
            </form>
        </div>
    )
}