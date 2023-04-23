import Theme from './MuiTheme'
import React from 'react'
import {ThemeProvider} from "@material-ui/core/styles";
import {useSelector} from "react-redux";

export default (props) => {
    const darkMode = useSelector(state => state.darkMode)
    return <ThemeProvider theme={ Theme(darkMode) } children={props.children}/>
}
