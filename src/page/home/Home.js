import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { SaveNoteList } from '../../store/action/NoteList'
import { findCurrentStreak } from '../../util/notelist/NoteListUtil'

const useStyles = makeStyles({
    intro: {
        padding: '.5rem',
        margin: '0 auto',
        textAlign: 'center',
    },
    inputPaper: {
        padding: '.5rem',
        margin: '2rem auto',
        textAlign: 'center',
    },
    input: {
        width: '85%',
        marginBottom: '1rem',
    },
    save: {
        marginBottom: '1rem',
        display: 'block',
        margin: '0 auto',
    },
    divider: {
        margin: '1rem 0',
    },
    notification: {
        transition: '300ms all ease',
        opacity: '0',
        willChange: 'opacity',
    },
    notificationShow: {
        opacity: '1',
    },
    dateHeader: {
        marginTop: '1.5rem',
    },
})

const dateTimeFormatter = new Intl.DateTimeFormat('en-US')

const saveNote = (date, text, noteList) => {
    const newList = noteList.filter((it) => it.date !== date)
    newList.unshift({
        date,
        text,
    })
    return SaveNoteList(newList)
}

const Home = () => {
    const classes = useStyles()

    //Set up note, either as from the existing list, or as a new note entirely
    const noteList = useSelector((state) => state.noteList)
    let currentNote
    if (noteList.length === 0) {
        currentNote = { text: null, date: dateTimeFormatter.format(new Date()) }
    } else {
        const maybeNote = noteList.find(
            (it) => it.date === dateTimeFormatter.format(new Date())
        )
        currentNote = maybeNote || {
            text: null,
            date: dateTimeFormatter.format(new Date()),
        }
    }
    //We save the noteText value from component state when we save the note
    const [noteText, setNoteText] = useState(currentNote.text)
    //We need this for our onClick below
    const dispatch = useDispatch()

    //This chooses if are or aren't currently displaying a save message
    const [showSave, setShowSaved] = useState(false)

    const currentStreak = findCurrentStreak(noteList)

    return (
        <div>
            <Paper elevation={2} className={classes.intro}>
                <Typography variant="h4" gutterBottom>
                    Welcome to One Nice Thing
                </Typography>
                <Typography variant="body1">
                    Here are the rules: Every day stop in and put one good thing
                    that happened to you here. You can change it up until
                    midnight, after which it's locked in the past, immutable.
                    You can view your list of prior good things at any time, so
                    if you ever need a pick-me-up or just want to revist
                    positive moments they're always there for you. The more you
                    do this, the more you'll find that you remember the
                    positives instead of the negatives, and hopefully this will
                    lead to a happier, more fulfilled you!
                </Typography>
            </Paper>

            {/* Things in the present are ever changing, and we want to be able to keep it up to date */}
            <Paper className={classes.inputPaper}>
                <Typography
                    className={classes.dateHeader}
                    variant="h5"
                    gutterBottom
                >
                    On {currentNote.date}. . .
                </Typography>
                <TextField
                    id="NoteInput"
                    label="What's today's nice thing?"
                    defaultValue={noteText}
                    className={classes.input}
                    multiline
                    rowsMax={4}
                    onInput={(e) => setNoteText(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.save}
                    onClick={() => {
                        dispatch(saveNote(currentNote.date, noteText, noteList))
                        setShowSaved(true)
                        setTimeout(() => setShowSaved(false), 2500)
                    }}
                >
                    Save :)
                </Button>
                <Typography
                    variant="h6"
                    className={`${classes.notification} ${
                        showSave && classes.notificationShow
                    }`}
                >
                    Great!!!
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Your current streak:{' '}
                    {currentStreak === 1
                        ? `${currentStreak} day`
                        : `${currentStreak} days`}
                </Typography>
            </Paper>
        </div>
    )
}

export default Home
