import React from 'react'
import Note from '../note'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    listItem: {
        marginBottom: '1rem',
    },
})

const FilledList = (noteList, classes) => (
    <div>
        <List>{noteList.map((it) => NoteListItem(it, classes))}</List>
    </div>
)

const EmptyList = () => (
    <Typography variant="h5">
        You haven't enshrined a good memory yet!
    </Typography>
)

const NoteListItem = (note, classes) => (
    <ListItem key={note.date} className={classes.listItem}>
        <Note text={note.text} date={note.date} />
    </ListItem>
)

const NoteList = ({ noteList }) => {
    const classes = useStyles()
    return noteList.length === 0 ? EmptyList() : FilledList(noteList, classes)
}

export default NoteList
