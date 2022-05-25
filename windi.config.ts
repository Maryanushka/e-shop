import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'
// colors
// import colors from 'windicss/colors'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
	extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}', 'public/**/*.{html}', './*.html'],
    exclude: ['node_modules', '.git', './stats.html']
  },
  theme: {
    extend: {},
  },
  shortcuts: {
    // 'light-img': 'block dark:hidden',
    // 'dark-img': 'hidden dark:block',
  },
  plugins: [
    // filters plugin require for navbar blur
    // FiltersPlugin as Plugin,
    TypographyPlugin as Plugin,
    // AspectRatioPlugin as Plugin,
  ] as Plugin[],
})