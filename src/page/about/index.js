import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: '1.5rem .5rem',
        margin: '0 auto',
        textAlign: 'center'
    },
    subheader: {
        marginTop: '2.5rem'
    }
})

const About = () => {
    const classes = useStyles()
    return (
        <Paper elevation={2} className={classes.root}>
            <Typography variant='h4' gutterBottom>About One Nice Thing</Typography>
            <Typography variant='body1'>
                One Nice Thing is a project by <a href="https://www.dev-eloper.com">Devin McIntyre</a> aimed at
                providing a simple and effective mental health tool to anyone who needs it.  Inspired by doing 
                this exercise with a friend, along with the rising stress in our modern world, he created this 
                tool to hopefully provide a way for people to see their world in a better light.
            </Typography>
            <Typography variant='h5' className={classes.subheader} gutterBottom>On the topic of data collection</Typography>
            <Typography variant='body1'>
                One Nice Thing does not collet any information entered into the application.  There is no back end 
                server collecting data, no email or other personal information collection, and no ads.  The data 
                is all stored locally on your device.
            </Typography>
        </Paper>
    )
}

export default About