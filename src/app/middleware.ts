import {withAuth} from "next-auth/middleware";

export default withAuth(
    function middleware(req) {
    },
    {
        callbacks: {
            authorized: ({req, token}) => {
                console.log("token",token)

                if (
                    req.nextUrl.pathname.startsWith('/') &&
                    token === null
                ) {
                    return false
                }
                return true
            }
        }
    }
)
