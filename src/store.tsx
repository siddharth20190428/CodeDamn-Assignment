import { configureStore } from "@reduxjs/toolkit";
import personalSlice from "./redux/personalSlice";
import portfolioSlice from "./redux/portfolioSlice";
import resumeSlice from "./redux/resumeSlice";

const store = configureStore({
    reducer: {
        personal: personalSlice,
        portfolio: portfolioSlice,
        resume: resumeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
