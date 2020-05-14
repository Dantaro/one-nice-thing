import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        width: '100%',
        minWidth: 275
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
})

const Note = ({ text, date }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    On {date}. . .
                </Typography>
                {/* Things in the past are immutable. Reflect, but move forward! */}
                <Typography variant="body2" component="p">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}

Note.propTypes = {
    text: PropTypes.string,
    date: PropTypes.string
}

export default Note
