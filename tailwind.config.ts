import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
//   theme: {
//   	extend: {
//   		colors: {
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			}
//   		},
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		}
//   	}
//   },
theme: {
    screens: {
      lg: { max: "1440px" },
      md: { max: "1050px" },
      sm: { max: "550px" }
    },
    extend: {
      colors: {
        black: {
          900: "var(--black_900)",
          "900_21": "var(--black_900_21)",
          "900_3f": "var(--black_900_3f)",
          "900_51": "var(--black_900_51)",
          "900_51_01": "var(--black_900_51_01)",
        },
        blue_gray: {
          800: "var(--blue_gray_800)",
          900: "var(--blue_gray_900)",
          "800_01": "var(--blue_gray_800_01)",
          "800_02": "var(--blue_gray_800_02)",
          "800_f2": "var(--blue_gray_800_f2)",
          "900_01": "var(--blue_gray_900_01)",
          "900_02": "var(--blue_gray_900_02)",
          "900_03": "var(--blue_gray_900_03)",
        },
        deep_purple: { 100: "var(--deep_purple_100)" },
        gray: { 900: "var(--gray_900)", "900_01": "var(--gray_900_01)" },
        indigo: { 
          100: "var(--indigo_100)", 
          300: "var(--indigo_300)", 
          "100_54": "var(--indigo_100_54)" 
        },
        light_green: { 900: "var(--light_green_900)" },
        pink: { 
          300: "var(--pink_300)", 
          a200: "var(--pink_a200)" 
        },
        red: { 900: "var(--red_900)" },
        white: {
          0: "var(--white_0)",
          1: "var(--white_1)",
          2: "var(--white_2)",
          "a700_3f": "var(--white_a700_3f)",
          "a700_f2": "var(--white_a700_f2)",
        }
      },
      boxShadow: {
        xs: "0 4px 40px 0 #0000003f",
        sm: "0 4px 4px 0 #0000003f"
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #8076af,#c0b7e7)",
        gradient1: "linear-gradient(251deg, #c0b7e7,#8076af)",
        gradient2: "radial-gradient(to right, #423c5f,#201e2d)",
        gradient3: "radial-gradient(85deg, #393356f2,#201e2d)",
        gradient4: "radial-gradient(circle, #403A5F 0%, #211E2E 100%)",
        gradient6: "radial-gradient(circle, #433D60 0%, #211E2E 100%)",
        gradient5: "linear-gradient(270deg, #343045, #c0b7e7, #8076af, #343045)"
      },
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
        montserratsubrayada: "Montserrat Subrayada",
        ppsupplymono: "PP Supply Mono"
      }
    }
	},
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
