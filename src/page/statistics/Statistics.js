import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { useSelector } from 'react-redux'
import {
    findMostConsecutiveDays,
    findAverageWordCount,
    findLongestNote,
} from 'util/notelist'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    paper: {
        padding: '1.5rem .5rem',
        margin: '0 auto 2rem auto',
        textAlign: 'center',
    },
    header: {
        textAlign: 'center',
    },
})

export const Statistics = () => {
    const classes = useStyles()
    const noteList = useSelector((state) => state.noteList)
    const bestStreak = findMostConsecutiveDays(noteList)
    const averageWordCount = findAverageWordCount(noteList)
    const longestNote = findLongestNote(noteList)
    return (
        <div>
            <Typography className={classes.header} variant="h3" gutterBottom>
                Statistics
            </Typography>
            <Paper className={classes.paper} elevation={2}>
                <Typography variant="body1" gutterBottom>
                    Most consecutive days:{' '}
                    {`${bestStreak} ${bestStreak === 1 ? 'day' : 'days'}`}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Average word count:{' '}
                    {`${averageWordCount} ${
                        averageWordCount === 1 ? 'word' : 'words'
                    }`}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Longest Note:{' '}
                    {`${longestNote} ${longestNote === 1 ? 'word' : 'words'}`}
                </Typography>
            </Paper>
        </div>
    )
}