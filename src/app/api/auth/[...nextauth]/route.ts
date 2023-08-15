import NextAuth, {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: "userMail", type: "text"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials, req) {
                if (typeof credentials !== "undefined") {

                    console.log(credentials)
                    const res = await fetch("http://localhost:8080/api/users/tokens",{
                        method:"POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            userMail: "filberol@mail.com",
                            password: "filberol"
                        }),
                    })

                    const response = await res.json()
                    console.log("res",response.token)

                    if (!res.ok) {
                        return null
                    }

                    return response.token
                } else {
                    return null
                }
            }
        }),
    ],
    session: { strategy: "jwt" },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
