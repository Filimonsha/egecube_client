import { UserCredentials } from "@/types/backend/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userCredentials: UserCredentials | null;
}

const initialState: UserState = {
  userCredentials: null,
};

const userCredentialsSlice = createSlice({
  name: "userCredentialsSlice",
  initialState,
  reducers: {
    setUserCreadentials(state, action: PayloadAction<UserCredentials>) {
      state.userCredentials = action.payload;
    },
  },
});

export const { setUserCreadentials } = userCredentialsSlice.actions;
export default userCredentialsSlice.reducer;
