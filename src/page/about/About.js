import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        padding: '1.5rem .5rem',
        margin: '0 auto',
        textAlign: 'center',
    },
    subheader: {
        marginTop: '2.5rem',
    },
})

const About = () => {
    const classes = useStyles()
    return (
        <Paper elevation={2} className={classes.root}>
            <Typography variant="h4" gutterBottom>
                About One Nice Thing
            </Typography>
            <Typography variant="body1">
                One Nice Thing is a project by{' '}
                <a href="https://www.dev-eloper.com">Devin McIntyre</a> aimed at
                providing a simple and effective mental health tool to anyone
                who needs it. Inspired by doing this exercise with a friend,
                along with the rising stress in our modern world, he created
                this tool to hopefully provide a way for people to see their
                world in a better light. If you're feeling especially giving you
                can also{' '}
                <a href="https://buymeacoff.ee/devineloper">buy him a coffee</a>
                .
            </Typography>
            <Typography variant="h5" className={classes.subheader} gutterBottom>
                On the topic of data collection
            </Typography>
            <Typography variant="body1">
                One Nice Thing does not collect any information entered into the
                application. There is no back end server collecting data, no
                email or other personal information collection, and no ads. The
                data is all stored locally on your device.
            </Typography>
            <Typography variant="h5" className={classes.subheader} gutterBottom>
                What can you do to help?
            </Typography>
            <Typography variant="body1">
                One Nice Thing is an OSS project, and can be found on{' '}
                <a href="https://github.com/Dantaro/one-nice-thing">Github</a>.
                Contributions are always welcome! If you have thoughts for
                things you'd like to see, you can also{' '}
                <a href="mailto:onenicethingdev@gmail.com">send a suggestion</a>
                .
            </Typography>
        </Paper>
    )
}

export default About
