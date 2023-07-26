import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase.init";

interface IUserState {
  user: {
    email: string | null;
    name: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface ILoginInfo {
  email: string;
  password: string;
}
interface IResisterInfo {
  email: string;
  password: string;
}

const initialState: IUserState = {
  user: {
    email: null,
    name: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }: IResisterInfo) => {
    console.log(email, password);
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);
// export const updateUser = createAsyncThunk(
//   "user/updateUser",
//   async ({ name }: { name: string }) => {
//     const data = await updateProfile(auth.currentUser!, {
//       displayName: name,
//     });
//     console.log(data);

//     return data.user!.displayName;
//   }
// );

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }: ILoginInfo) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);
export const logOut = createAsyncThunk("user/logOut", async () => {
  await signOut(auth);

  return;
});
// export const signout = createAsyncThunk(
//   "user/signOut",
//   async () => {
//     const data = await signOut();

//     return data.user.email;
//   }
// );

const userSlice = createSlice({
  name: "user ",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
