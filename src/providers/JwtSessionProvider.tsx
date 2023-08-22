"use client"

import React, {useEffect} from "react";
import {useSession} from "next-auth/react";
import {updateSession} from "@/auth/providers/tokenProvider";
import {UserSession} from "@/types/backend/user";
import {ACCESS_TOKEN_TIMEOUT, REFRESH_TIME} from "@/auth/consts/tokens";

const JwtSessionProvider = ({ children }: { children: React.ReactNode }) => {
  const {data, update} = useSession()

  useEffect(() => {
    setTimeout(() => {
      updateSession(data?.user as UserSession | null, update)
    }, ACCESS_TOKEN_TIMEOUT - REFRESH_TIME)
  })
  return <>{children}</>
}

export default JwtSessionProvider
