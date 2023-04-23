import { createMuiTheme } from '@material-ui/core/styles'

export default (darkMode) => createMuiTheme({
    palette: {
        type: darkMode ? 'dark' : 'light',
        primary: { main: '#1261A0', light: '#3895D3', dark: '#072F5F' },
        secondary: { main: '#F6F8F9', light: '#F6F8F9', dark: '#424242' },
        success: { main: '#95CE47' },
        error: { main: '#9F2711' },
        warning: { main: '#F5BE69' },
        info: { main: '#3D678D' },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 770,
            md: 950,
            lg: 1300,
            xl: 1600
        }
    }
})
