import React from 'react';
import './ChatBox.css'
import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemAvatar, ListItemSecondaryAction,
    ListItemText,
    makeStyles, TextField, Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        /*backgroundColor: theme.palette.background.paper,*/
    },
    list: {
        color:'white'
    },
    listItem:{
        color:'white',
    },
    inline: {
        display: 'inline',
    },
}));

const ChatBox = () =>{

    const classes = useStyles();

    return (
        <div style={{backgroundColor:'#206BA4'}}>
            <List className={classes.list}>
                <ListItem>
                    <form className={classes.root} noValidate autoComplete="off">
                        {/*<TextField id="outlined-basic" label="Search" variant="outlined" style={{width: '100%'}}/>*/}
                        <TextField id="standard-basic" variant="outlined" fullWidth className='search-box' placeholder="Search"/>
                    </form>
                </ListItem>
            </List>
            <Divider />
            <List className='users-list'>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                          primary="Brunch this weekend?"
                          secondary={
                              <Typography variant='body2'>Message Goes Here</Typography>
                          }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText style={{color: "white !important"}}
                                  primary="Brunch this weekend?"
                                  secondary={
                                      <Typography variant='body2'>Message Goes Here</Typography>
                                  }
                    />
                    <ListItemSecondaryAction>
                        <Typography style={{fontSize: '12px'}}>06:40 PM</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </div>
    )
}

export default ChatBox;