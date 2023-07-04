import { createSlice } from "@reduxjs/toolkit";
import { initialResumeValues } from "../types/resumeTypes";
import { getInitialValues } from "../utils";

const initialState = getInitialValues("resume", initialResumeValues);

const resumeSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {},
});

export default resumeSlice.reducer;
