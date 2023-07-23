import { RootState } from "@/redux/store";

const selectUserState = (state: RootState) => state.user;

export { selectUserState };
