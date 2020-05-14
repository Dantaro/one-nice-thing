import React from 'react'
import NoteList from '../../component/notelist'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: '.5rem',
        margin: '0 auto',
        textAlign: 'center'
    },
    header: {
        textDecoration: "underline"
    }
})

const List = () => {
    const noteList = useSelector(state => state.noteList)
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Typography className={classes.header} variant="h3" gutterBottom>your nice things</Typography>
            <NoteList noteList={noteList}/>
        </Box>
    )
}

export default List