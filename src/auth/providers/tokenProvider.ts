import Credentials from "next-auth/providers/credentials";
import {AuthResponse, UserSession} from "@/types/backend/user";
import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";
import {Session} from "next-auth";

export const tokenProvider = Credentials({
  name: "token",
  credentials: {},
  authorize: async function(credentials): Promise<UserSession | null> {
    console.log("rebuilding session with refresh token")
    const currentSession = await getServerSessionWithOptions()
    const userSession = currentSession.user as UserSession
    const refreshToken = userSession.refreshToken

    const authRes = await fetch("http://localhost:8080/api/users/tokens/access", {
      method: "POST",
      headers: {
        "Authentication": `Bearer ${refreshToken}`
      },
    });
    if (!authRes.ok) return null
    const data = await authRes.json() as AuthResponse
    return {
      ...userSession,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken
    } as UserSession
  }
})

export async function updateSession(session: UserSession | null, update: (session: UserSession) => void) {
  if (!session) return
  console.log("rebuilding session with refresh token" + session.refreshToken)
  const refreshToken = session.refreshToken

  const authRes = await fetch("http://localhost:8080/api/users/tokens/access", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${refreshToken}`
    },
  });
  if (!authRes.ok) return null
  const data = await authRes.json() as AuthResponse
  console.log(data.accessToken)
  update({
    ...session,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken
  })
}