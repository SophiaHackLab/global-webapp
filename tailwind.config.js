/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
    content: [
        "./pages/**/*.{ts,tsx,vue}",
        "./components/**/*.{ts,tsx,vue}",
        "./app/**/*.{ts,tsx,vue}",
        "./src/**/*.{ts,tsx,vue}",
    ],
    theme: {
        extend: {
            textShadow: {
                sm: "0 1px 2px var(--tw-shadow-color)",
                DEFAULT: "0 0px 3px var(--tw-shadow-color)",
                lg: "0 8px 16px var(--tw-shadow-color)",
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1350px",
                "2xl": "1440px",
                "3xl": "1700px",
                "4xl": "1920px",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
                megabounce: {
                    "0%, 100%": {
                        transform: "translateY(-344px)",
                        "animation-timing-function": "cubic-bezier(0.8,0,1,1);",
                    },
                    "50%": {
                        transform: "translateY(0)",
                        "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
                    },
                },
                inftranslate: {
                    "0%": {
                        transform: "translateX(60%)",
                    },
                    "100%": {
                        transform: "translateX(-100%)",
                    },
                },
                typing_pulse: {
                    "0%": {
                        "border-color": "transparent",
                    },
                    "50%": {
                        "border-color": "white",
                    },
                    "100%": {
                        "border-color": "transparent",
                    },
                },
            },
            animation: {
                "infinite-scroll": "infinite-scroll 25s linear infinite",
                megabounce: "megabounce 2s infinite",
                inftranslate: "inftranslate 8s infinite linear",
                typingpulse: "typing_pulse 1s infinite",
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow": (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme("textShadow") },
            );
        }),
    ],
};
