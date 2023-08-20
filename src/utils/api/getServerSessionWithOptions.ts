import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {Session} from "next-auth";

const getServerSessionWithOptions = async (): Promise<Session> =>
  await getServerSession(authOptions) as Session;

export default getServerSessionWithOptions;
