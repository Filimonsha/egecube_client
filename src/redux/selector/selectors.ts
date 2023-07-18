import { RootState } from "@/redux/store";

const selectUserBaseState = (state: RootState) => state.userBase;

export { selectUserBaseState };
