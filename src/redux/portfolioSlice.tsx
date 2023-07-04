import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    initialPortfolioValues,
    PortfolioState,
} from "../types/portfolioTypes";
import { getInitialValues, saveToLocal } from "../utils";

const initialState = getInitialValues("portfolio", initialPortfolioValues);

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        updatePortfolioSection: (
            state,
            action: PayloadAction<Partial<PortfolioState>>
        ) => {
            let updatedState = { ...state, ...action.payload };
            saveToLocal("portfolio", updatedState);

            return { ...updatedState };
        },
    },
});

export const { updatePortfolioSection } = portfolioSlice.actions;

export default portfolioSlice.reducer;
