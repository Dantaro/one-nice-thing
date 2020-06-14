import React from 'react'
import { Paper, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        padding: '.5rem',
        margin: '0 auto',
        textAlign: 'center',
    },
    paper: {
        padding: '1.5rem .5rem',
        maxWidth: '50rem',
        margin: '0 auto 2rem auto',
    },
})

export const Mindfulness = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Paper elevation={2} className={classes.paper}>
                <Typography variant="h4" gutterBottom>
                    Mindfulness Exercises
                </Typography>
                <Typography variant="body1">
                    Taking a few moments to focus on yourself in an important
                    part of managing your stress. Here are a few mindfulness
                    exercises to help you do just that!
                </Typography>
            </Paper>
        </Box>
    )
}
