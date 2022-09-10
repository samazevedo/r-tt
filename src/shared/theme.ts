import { ThemeProps } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const theme = {
    fonts: {
        basic: 'helvetica, sans-serif',
        mainFont: 'Suwannaphum, serif',
    },
    colors: {
        green: '#A9ED33',
        blue: '#60C2FB',
        orange: '#FF8E25',
        white: '#FFFFFF',
        black: '#000000',
        gray: '#696969',
        darkBlue: '#2C3E50',
        mainBg: '#5A5A5AFB',
    },
    breakpoints: {
        mobile: '576px',
        tablet: '768px',
        desktop: '1024px',
        desktopL: '1280px',
    },
    fontSizes: {
        small: '1.2rem',
        medium: '1.6rem',
        large: '2.4rem',
    },
}

export type MainThemeProps = ThemeProps<typeof theme>
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
html {
  scroll-behavior: smooth;
  font-size: 10px;
}
body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.mainFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.mainBg};
    }
    *,
    *::after,
    *::before { box-sizing: border-box; }
    h1, h2, h3, h4, h5, h6 { margin: 0; }
    a { 
        color: ${({ theme }) => theme.colors.green};
        text-decoration: none;
     }
    a:hover { color: ${({ theme }) => theme.colors.orange} }
    ul, ol {
      list-style: none;
    }

`
