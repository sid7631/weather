import React from 'react'
import { Backdrop, Box } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        position: 'absolute',
    },
}));


const Loading = (props) => {

    const classes = useStyles()
    return (
        <Box width='100%' height='100%'>
            <Backdrop className={classes.backdrop} open={props.show}>
                <Box className={classes.root}>
                    <CircularProgress />
                </Box>
            </Backdrop>

        </Box>
    )
}

export default Loading
