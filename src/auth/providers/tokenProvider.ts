import {AuthResponse, UserSession} from "@/types/backend/user";

export async function updateSession(session: UserSession | null, update: (session: UserSession) => void) {
  if (!session) return
  console.log("rebuilding session with refresh token " + session.refreshToken)
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