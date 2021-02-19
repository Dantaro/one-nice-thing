import React, { useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { useSelector } from 'react-redux'
import {
    findMostConsecutiveDays,
    findAverageWordCountRounded,
    findLongestNote,
} from 'util/notelist'
import { makeStyles } from '@material-ui/core/styles'
import WordCloud from 'wordcloud'
import { findWordCounts } from 'util/notelist/NoteListUtil'

const useStyles = makeStyles({
    paper: {
        padding: '1.5rem .5rem',
        margin: '0 auto 2rem auto',
        textAlign: 'center',
        maxWidth: '50rem',
    },
    header: {
        textAlign: 'center',
    },
})

const NotelistWordMap = ({id, noteList}) => { 
    const canvasRef = useRef(null)
    useEffect(() => {
        WordCloud(document.getElementById(id), {
            list: findWordCounts(noteList),
            rotateRatio: 0,
            weightFactor: 10,
            color: () => '#1261A0'
        })
    }, [id, noteList]);

    return (<>
        <Typography variant="body1">
            Your Word Cloud
        </Typography>
        <canvas ref={canvasRef} id={id} /> 
    </>)
}

export const Statistics = () => {
    const classes = useStyles()
    const noteList = useSelector((state) => state.noteList)
    const bestStreak = findMostConsecutiveDays(noteList)
    const averageWordCount = findAverageWordCountRounded(noteList)
    const longestNote = findLongestNote(noteList)
    return (
        <div>
            <Paper className={classes.paper} elevation={2}>
                <Typography
                    className={classes.header}
                    variant="h4"
                    gutterBottom
                >
                    Statistics
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Here's a bit of fun information about your nice things!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Total number of nice things: {noteList.length}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Most consecutive days:{' '}
                    {`${bestStreak} ${bestStreak === 1 ? 'day' : 'days'}`}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Average word count: {' '}
                    {`${averageWordCount} ${averageWordCount === 1 ? 'word' : 'words'}`}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Longest Note:{' '}
                    {`${longestNote} ${longestNote === 1 ? 'word' : 'words'}`}
                </Typography>
                <NotelistWordMap id="notelistWordCount" noteList={noteList} />
                <br/>
                <Typography variant="body2">
                    Have an idea for other statistics? <a href="mailto:onenicethingdev@gmail.com">Shoot over an email</a> with your suggestions!
                </Typography>
            </Paper>
        </div>
    )
}
