import React, { useState } from 'react'
import { Canvas } from 'component/canvas'
import { Paper, Typography, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
    instructions: {
        fontStyle: 'italic',
        fontSize: '.75em'
    },
    startButton: {
        margin: "1rem"
    },
    canvasContainer: {
        [theme.breakpoints.up('sm')]: {
            margin: "2rem"
        }
    }
}))

export const Breathing = () => {
    const classes = useStyles()

    const [displayBreathing, setDisplayBreathing] = useState(false)
    const handleStart = () => {
        setDisplayBreathing(true)
    }

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fill()
        ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#FFFFFF'
        ctx.fill()
        ctx.fillStyle = '#1261A0'
        ctx.beginPath()
        
        ctx.arc(
            ctx.canvas.width / 2, 
            ctx.canvas.height / 2,
            40 * Math.sin(frameCount * 0.01) ** 2 + 5, 
            0, 
            2 * Math.PI
        )
        ctx.fill()
    }

    return (
    <Box className={classes.root}>
        <Paper>
            { displayBreathing ? (
                <>
                    <Canvas className={classes.canvasContainer} draw={ draw }/>
                    <Typography className={classes.instructions} variant="body1">
                        Take a deep breath as the circle grows, and let it out as the circle shrinks.
                    </Typography>
                </>
            ) : (
                <>
                    <Typography variant="h5">
                        Breathing Circle
                    </Typography>
                    <Typography variant="body1">
                        A simple excercise to help calm your nerves. 
                        Breath in and out with the circle for as long 
                        as you need to.
                    </Typography>
                    <Button className={classes.startButton} onClick={handleStart}>Start</Button>
                </>
            )}
        </Paper>
    </Box>)
}