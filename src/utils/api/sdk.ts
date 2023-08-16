import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";

export const callWithSession = () =>{
    const currentSession = getServerSessionWithOptions()

}
