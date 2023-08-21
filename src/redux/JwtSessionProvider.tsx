"use client";

import React, {useEffect} from "react";
import {useSession} from "next-auth/react";
import {updateSession} from "@/auth/providers/tokenProvider";
import {UserSession} from "@/types/backend/user";

const accessTokenTimeout = 10 * 60 * 1000
const refreshTime = 60 * 1000

const JwtSessionProvider = ({ children }: { children: React.ReactNode }) => {
  const {data, update} = useSession()

  useEffect(() => {
    setTimeout(() => {
      updateSession(data?.user as UserSession | null, update)
    }, accessTokenTimeout - refreshTime)
  })
  return <>{children}</>
}

export default JwtSessionProvider
