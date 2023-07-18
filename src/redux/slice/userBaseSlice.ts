import { UserBase } from "@/types/backend/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: UserBase | null;
}

const initialState: UserState = {
  user: null,
};

const userBaseSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action: PayloadAction<UserBase>) {
      state.user = action.payload;
    },
  },
});

export const { createUser } = userBaseSlice.actions;
export default userBaseSlice.reducer;
