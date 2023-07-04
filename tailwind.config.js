/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
            },
            colors: {
                primary05: "#EEF2FF",
                primary5: "#6366F1",
                primary6: "#4F46E5",
                primary7: "#4338CA",
                secondary1: "#E0F2FE",
                secondary2: "#BAE6FD",
                secondary5: "#0EA5E9",
                secondary8: "#075985",
                secondary9: "#0C4A6E",
                success1: "#BEF264",
                accent: "#EC4899",
                zink05: "#FAFAFA",
                zink1: "#F4F4F5",
                zink4: "#A1A1AA",
                zink5: "#71717A",
                zink7: "#3F3F46",
                zink9: "#18181B",
                trophy: "#FE6712",
            },
            borderWidth: { 3: "3px" },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
