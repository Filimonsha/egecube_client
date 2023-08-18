import StandingCat from "@/components/funnyJokes/StandingCat";
import {UserSession} from "@/types/backend/user";
import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";

const ProfilePage = async () => {
  const session  = await getServerSessionWithOptions()
  const user = session.user as UserSession
  console.log("printing session")
  console.log(session)
  console.log(session.user)
  return (
    <>
      <StandingCat/>
      This is a picture of {user.userMail} in real life, logged in
    </>
  );
};

export default ProfilePage;
