import React from 'react'
import { Typography } from '@material-ui/core'

export const Releases = {
    'v1.2.0': (
        <Typography variant="body1">
            With release 1.2.0 we're adding the ability to (manually)
            export/import your data. This can be done by clicking the icon in
            the menu next to the version number. In an effort to keep things as
            secure as possible you will have to provide a password to encrypt
            your data for the export, and to later provide the password again to
            import it. This is laying the groundwork for a planned later
            automated (and secure) automated cross-device sync process.
        </Typography>
    ),
    'v1.3.0': (
        <Typography variant="body1">
            With release 1.3.0 we've added a new statistic: a word cloud! Now you 
            can see a visualization what words you use and how frequently you make 
            use of them! Enjoy this fun feature, inspired by a suggestion email! 
            As a reminder, if you have any suggestions, bugs, or general thoughts 
            about One Nice Thing please feel free to send an email from the About 
            or Statistics page!
        </Typography>
    )
}
