import React, { useState } from "react";
import { Button, Toolbar, Typography,IconButton,Drawer,MenuItem,Link  } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { storeContactQueries } from "../../services/contact.service";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };
}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
  
function Contact() {  
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTimeout(function(){ setOpen(false); }, 200);
  };

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("email", email);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("phone", phone);
    formData.append("message", message);
    storeContactQueries(formData);
    handleClose();
  }
  
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="contact-modal-title">Contact Us</h2>
      <p id="contact-modal-description">
        <form onSubmit={handleSubmit} noValidate>
          <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item xs={6}>
                      <p>
                      First Name
                      </p>
                  </Grid>
                  <Grid item xs={6}>
                      <TextField
                      required
                      type="text"
                      value={first_name}
                      id="first_name"
                      label="First Name"
                      onInput={(e) => setFirstName(e.target.value)}
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <p>
                      Last Name
                      </p>
                  </Grid>
                  <Grid item xs={6}>
                      <TextField
                      required
                      type="text"
                      value={last_name}
                      id="last_name"
                      label="Last Name"
                      onInput={(e) => setLastName(e.target.value)}
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <p>
                      E-Mail Address
                      </p>
                  </Grid>
                  <Grid item xs={6}>
                      <TextField
                      required
                      type="email"
                      value={email}
                      id="email"
                      label="E-Mail Address"
                      onInput={(e) => setEmail(e.target.value)}
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <p>
                      Phone Number
                      </p>
                  </Grid>
                  <Grid item xs={6}>
                      <TextField
                      required
                      type="phone"
                      value={phone}
                      id="phone"
                      label="Phone Number"
                      onInput={(e) => setPhone(e.target.value)}
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <p>
                      Message
                      </p>
                  </Grid>
                  <Grid item xs={6}>
                      <TextField
                      required
                      type="text"
                      value={message}
                      id="message"
                      label="Message"
                      onInput={(e) => setMessage(e.target.value)}
                      />
                  </Grid>
                  <Grid item xs={12}></Grid>
              </Grid>
              <Button variant="contained" color="primary"
                onClick={handleSubmit}>
                  Submit
              </Button>
          </div>
      </form>
      </p>
    </div>
  );
  return (
    <div>
      <button className="icon" type="button" onClick={handleOpen}>
        <HelpOutlineIcon />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        {body}
      </Modal>
    </div>
  );
}
export default Contact;
