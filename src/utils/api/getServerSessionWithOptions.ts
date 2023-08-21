import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const getServerSessionWithOptions = async () =>
  await getServerSession(authOptions);

export default getServerSessionWithOptions;
