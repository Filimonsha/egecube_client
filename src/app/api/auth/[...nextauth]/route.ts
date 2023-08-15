import NextAuth, {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {JWT} from "next-auth/jwt";

export const authOptions: AuthOptions = {
    // secret: "bcYLB0AgIeO7tCCDDBthqtGpdheHsC9TgZDWYYzmIIU=",
    // secret: "",
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: "name", type: "text"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials, req) {
                if (typeof credentials !== "undefined") {

                    console.log(credentials)
                    const res = await fetch("http://localhost:8080/api/users/tokens", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            userMail: credentials.email,
                            password: credentials.password
                        }),
                    })


                    const response = await res.json()
                    if (!res.ok) {
                        return null
                    }
                    //TODO
                    const userRequest = await fetch(`http://localhost:8080/api/users/accounts/${1}`,
                        {
                            headers: {Authentication: `Bearer ${response.token}`}
                        }
                        )
                    // console.log("reqsaf",userRequest)
                    console.log("a")
                    const user = await userRequest.json()
                    console.log("user", user)
                    if (userRequest.ok) {

                        return user
                    }

                    return null
                    // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                    // if (user) {

                    // Any object returned will be saved in `user` property of the JWT
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
    ],
    session: {strategy: "jwt"},
    // callbacks: {
        // async jwt({token, user, account, profile}) {
        //     console.log("form jwt", user)
        //     console.log("token", token)
        //     if (typeof user !== "undefined") {
        //         console.log("AAAA", {name: "123"} as JWT)
        //         // user has just signed in so the user object is populated
        //         return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        //     }
        //     return token
        // },
        // async session ({ session, token, user }) {
        //     console.log("From session",session)
        //     console.log("token",token)
        //     const sanitizedToken = Object.keys(token).reduce((p, c) => {
        //         // strip unnecessary properties
        //         if (
        //             c !== "iat" &&
        //             c !== "exp" &&
        //             c !== "jti" &&
        //             c !== "apiToken"
        //         ) {
        //             return { ...p, [c]: token[c] }
        //         } else {
        //             return p
        //         }
        //     }, {})
        //     return { expires:"123"}
        // },
    // }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
