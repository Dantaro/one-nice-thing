import React from 'react'
import PropTypes from 'prop-types'
import Switch from "@material-ui/core/Switch";
import {makeStyles} from "@material-ui/core/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
    switchHolder: {
        display: "flex",
        alignItems: "center"
    }
})

const DarkModeSwitcher = ({onClick, state}) => {
    const classes = useStyles()
    return (
        <div className={classes.switchHolder}>
            <FontAwesomeIcon icon={faSun}/>
            <Switch defaultChecked={state} onClick={onClick}/>
            <FontAwesomeIcon icon={faMoon}/>
        </div>
    )
}

DarkModeSwitcher.propTypes = {
    onClick: PropTypes.func,
    state: PropTypes.bool
}

export default DarkModeSwitcher