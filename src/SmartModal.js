import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SmartModal({amount, id}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [suggestedAmount, setAmount] = React.useState(null);

    const handleOpen = async () => {
        await getSuggestedAmount();
        console.log(id);
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
    };

    const getSuggestedAmount = async () => {
        const res = await fetch(`http://20.198.81.29:5003/getLoanAmount/${id}`)
        const data = await res.json();
        console.log(data);
        setAmount(data.predicted_loan_amount);
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Smart Assist
      </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <center>
                            <h2 id="transition-modal-title">Smart Assist</h2>
                            <h5 id="transition-modal-description">Intelligent Loan Amount Prediction</h5>
                            <p id="transition-modal-description">Requested Amount: {amount}</p>
                            <p id="transition-modal-description">Smart Assist Suggestion: {suggestedAmount}</p>
                        </center>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}