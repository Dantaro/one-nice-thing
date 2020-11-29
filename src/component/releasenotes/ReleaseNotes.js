import React, { useState } from 'react'
import { Modal, Grid, Typography, makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { SaveReleaseNoteView } from 'store/action/ReleaseNotes'

const useStyles = makeStyles((theme) => ({
    modalContent: {
        position: 'absolute',
        width: '20em',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        [theme.breakpoints.up('md')]: {
            width: '28em',
        },
    },
}))

const ReleaseNotesModal = () => {
    const releaseNotesViewed = useSelector((state) => state.releaseNotesViewed) // Get this from Redux
    const dispatch = useDispatch()
    // Move release version into global config
    const versionNumber = process.env.REACT_APP_CURRENT_VERSION

    const [open, setOpen] = useState(releaseNotesViewed !== versionNumber)

    const handleClose = () => {
        dispatch(SaveReleaseNoteView(versionNumber))
        setOpen(false)
    }
    const classes = useStyles()
    return (
        <Modal
            open={open}
            onClose={handleClose}
            disableAutoFocus
            disableEnforceFocus
        >
            <div className={classes.modalContent}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Release notes for {versionNumber}
                        </Typography>
                        <Typography variant="body1">
                            With release 1.2.0 we're adding the ability to
                            (manually) export/import your data. This can be done
                            by clicking the icon in the menu next to the version
                            number. In an effort to keep things as secure as
                            possible you will have to provide a password to
                            encrypt your data for the export, and to later
                            provide the password again to import it. This is
                            laying the groundwork for a planned later automated
                            (and secure) automated cross-device sync process.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Modal>
    )
}

export { ReleaseNotesModal }
