import { type Config } from "tailwindcss";
import TailwindTypography from "tailwindcss/typography";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.gray.100"),
            },
            a: {
              color: theme("colors.blue.300"),
              textDecorationLine: "underline",
            },
          },
        },
      }),
    },
  },
  plugins: [TailwindTypography],
} satisfies Config;
