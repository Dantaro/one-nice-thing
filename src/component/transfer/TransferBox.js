import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Modal,
    Grid,
    Button,
    makeStyles,
    Typography,
    Input,
    TextField,
} from '@material-ui/core'
import { encryptObject, decryptObject } from 'util/transfer/TransferUtil'
import { ReplaceRoot } from 'store/action/Root'

const TransferModalState = {
    DECIDE: 0,
    SAVE: 1,
    LOAD: 2,
}

const useStyles = makeStyles((theme) => ({
    paper: {
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
    buttonGridContainer: {
        textAlign: 'center',
    },
}))

const SaveLoadQuestion = ({ handleLoad, handleSave, classes }) => {
    return (
        <Grid container>
            <Grid
                item
                container
                xs={12}
                alignContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Typography>
                        Create an export of your notes so you can import them on
                        another device.
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.buttonGridContainer}>
                    <Button onClick={handleLoad}>Import</Button>
                </Grid>
                <Grid item xs={6} className={classes.buttonGridContainer}>
                    <Button onClick={handleSave}>Export</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

const TransferModal = ({ open, handleClose }) => {
    // Pull state to transfer
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    // Present 2 buttons (Load/Save)
    // Load Save Box or Load Box
    const classes = useStyles()
    const [saveOrLoadState, setSaveOrLoadState] = useState(
        TransferModalState.DECIDE
    )

    const buildContent = () => {
        if (saveOrLoadState === TransferModalState.DECIDE) {
            return (
                <SaveLoadQuestion
                    handleLoad={() =>
                        setSaveOrLoadState(TransferModalState.LOAD)
                    }
                    handleSave={() =>
                        setSaveOrLoadState(TransferModalState.SAVE)
                    }
                    classes={classes}
                />
            )
        } else if (saveOrLoadState === TransferModalState.SAVE) {
            return <TransferExportBox state={state} />
        } else if (saveOrLoadState === TransferModalState.LOAD) {
            return <TransferImportBox dispatch={dispatch} />
        } else {
            setSaveOrLoadState(TransferModalState.DECIDE)
        }
    }

    return (
        <Modal
            open={open}
            onClose={() => {
                setSaveOrLoadState(TransferModalState.DECIDE)
                handleClose()
            }}
        >
            <div className={classes.paper}>{buildContent()}</div>
        </Modal>
    )
}

const TransferExportBox = ({ state }) => {
    // Ask for encryption key / password
    // Encrypt state via TransferUtil
    // Display encrypted state in a copiable box
    const [providedKey, setProvidedKey] = useState(undefined)
    const [exportedState, setExportedState] = useState(undefined)
    const [exportError, setExportError] = useState(undefined)

    const exportState = () => {
        try {
            const exported = encryptObject({
                obj: state,
                encryptionKey: providedKey,
            })
            setExportedState(exported)
            setExportError(undefined)
        } catch (e) {
            setExportedState(undefined)
            setExportError(e.message)
        }
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography>Please provide a key</Typography>
                <Input
                    type="password"
                    onChange={(e) => setProvidedKey(e.target.value)}
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button disabled={!providedKey} onClick={exportState}>
                    Export
                </Button>
            </Grid>
            {exportError && (
                <Grid item xs={12}>
                    <Typography>{exportError}</Typography>
                </Grid>
            )}
            {exportedState && (
                <>
                    <Grid item xs={12}>
                        <Typography>
                            Use this export with your key to import to another
                            device!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            defaultValue={exportedState}
                            multiline
                            rows={5}
                            style={{ width: '100%' }}
                        ></TextField>
                    </Grid>
                </>
            )}
        </Grid>
    )
}

const TransferImportBox = ({ dispatch }) => {
    // Ask for encryption key / password
    const [providedKey, setProvidedKey] = useState(undefined)
    const [importValue, setImportValue] = useState(undefined)
    const [exportError, setExportError] = useState(undefined)
    const [success, setSuccess] = useState(undefined)
    // Decrypt state via TransferUtil
    // Replace existing state
    const importState = () => {
        try {
            const importState = decryptObject({
                encryptedString: importValue,
                encryptionKey: providedKey,
            })
            setExportError(undefined)
            // setApplicationState(importState)
            dispatch(ReplaceRoot(importState))
            setSuccess(true)
        } catch (e) {
            setSuccess(false)
            setExportError(e.message)
        }
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography>Please provide your key</Typography>
                <Input
                    type="password"
                    onChange={(e) => setProvidedKey(e.target.value)}
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography>Please provide the transfer data</Typography>
                <TextField
                    multiline
                    rows={5}
                    onChange={(e) => setImportValue(e.target.value)}
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    disabled={!providedKey || !importValue}
                    onClick={importState}
                >
                    Import
                </Button>
            </Grid>
            {exportError && (
                <Grid item xs={12}>
                    <Typography>{exportError}</Typography>
                </Grid>
            )}
            {success && (
                <Grid item xs={12}>
                    Import sucessful!
                </Grid>
            )}
        </Grid>
    )
}

export { TransferModal }
