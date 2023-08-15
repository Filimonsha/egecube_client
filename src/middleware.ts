import {withAuth} from "next-auth/middleware";

export default withAuth(
    function middleware(req) {
    },
    {
        callbacks: {
            authorized: ({req, token}) => {

                console.log("tosskesn",token)

                if (
                    // req.nextUrl.pathname.startsWith('/') &&
                    token === null
                ) {
                    console.log("a")
                    return false
                }
                return true
            }
        }
    }
)
// export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }
