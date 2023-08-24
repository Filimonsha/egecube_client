import {AuthResponse, UserSession} from "@/types/backend/user";
import {ACCESS_TOKEN_ENDPOINT} from "@/auth/consts/routes";

let lastActivated = ""

export async function updateSession(session: UserSession | null, update: (session: UserSession) => void) {
  if (session?.refreshToken === lastActivated) return
  if (!session) return
  console.log("Rebuilding session with refresh token " + session.refreshToken)
  const refreshToken = session.refreshToken

  const authRes = await fetch(ACCESS_TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${refreshToken}`
    },
  });
  if (!authRes.ok) return null
  const data = await authRes.json() as AuthResponse
  console.log("Got new access token " + data.accessToken)
  lastActivated = data.accessToken
  update({
    ...session,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken
  })
}