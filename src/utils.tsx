import { PortfolioState } from "./types/portfolioTypes";
import { PersonalState } from "./types/personalTypes";
import { ResumeState } from "./types/resumeTypes";

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export const isValuesChanged = (values: any, original: any) => {
    return JSON.stringify(values) === JSON.stringify(original);
};

export const saveToLocal = <
    T extends PersonalState | PortfolioState | ResumeState
>(
    key: string,
    state: T
) => {
    localStorage.setItem(key, JSON.stringify(state));
};

export const getInitialValues = <
    T extends PersonalState | PortfolioState | ResumeState
>(
    key: string,
    defaultValue: T
) => {
    let stored = localStorage.getItem(key);
    let initial = defaultValue;
    if (!stored) {
        localStorage.setItem(key, JSON.stringify(defaultValue));
    } else {
        initial = JSON.parse(stored);
    }
    return initial;
};
