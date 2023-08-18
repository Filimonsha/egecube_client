import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {UserSession} from "@/types/backend/user";

const getServerSessionWithOptions = async (): Promise<UserSession> =>
  await getServerSession(authOptions) as UserSession;

export default getServerSessionWithOptions;
