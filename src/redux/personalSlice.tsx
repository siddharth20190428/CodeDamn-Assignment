import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialPersonalValues, PersonalState } from "../types/personalTypes";
import { getInitialValues, saveToLocal } from "../utils";

const initialState = getInitialValues("personal", initialPersonalValues);

const personalSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updatePersonal: (
            state,
            action: PayloadAction<Partial<PersonalState>>
        ) => {
            const updatedState = { ...state, ...action.payload };
            saveToLocal("personal", updatedState);

            return { ...updatedState };
        },
        deleteProfilePicture: (state) => {
            const updatedState = { ...state, profilePicture: "" };
            saveToLocal("personal", updatedState);

            return { ...updatedState };
        },
        updateSocials: (state, action: PayloadAction<string[]>) => {
            const socials = [
                ...state.socials.map((social, ind) => {
                    return { ...social, href: action.payload[ind] };
                }),
            ];

            const updatedState = { ...state, socials };
            saveToLocal("personal", updatedState);

            return { ...updatedState };
        },
    },
});

export const { updatePersonal, deleteProfilePicture, updateSocials } =
    personalSlice.actions;

export default personalSlice.reducer;
