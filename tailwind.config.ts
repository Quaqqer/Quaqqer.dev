import { type Config } from "tailwindcss";
import TailwindTypography from "tailwindcss/typography";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: ({ theme }) => ({
              color: theme("colors.blue.300"),
              pointerEvents: "none",
            }),
          },
        },
      },
    },
  },
  plugins: [TailwindTypography],
} satisfies Config;
