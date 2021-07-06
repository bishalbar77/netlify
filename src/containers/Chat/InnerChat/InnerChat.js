import React, {useEffect, useRef} from 'react';
import './InnerChat.css';
import {Avatar, Button, Card, CardContent, CardHeader, Divider, Paper, Typography} from "@material-ui/core";


const InnerChat = () => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, []);

  return (
    <div style={{minHeight:'66vh', maxHeight:'66vh'}}>
        <Card>
            <div className='user-details'>
                <div className="user-info">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" style={{backgroundColor:'#206BA4'}} >
                                A
                            </Avatar>
                        }
                    />
                    <Typography variant='h4'>Aayush Soni</Typography>
                </div>
                <div className="user-meeting-info">
                    <Button variant="contained" >Request A Meeting</Button>
                </div>
            </div>
            <Divider/>
            <CardContent className='card-content' style={{minHeight:'54vh',maxHeight:'54vh'}} >
                <div className='connector-side'>
                    <Paper className="paper" variant='outlined'>
                        <Typography variant='body1'>Hello, I'm a Connector</Typography>
                        <Typography variant='body2'>06:45 AM</Typography>
                    </Paper>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >A</Avatar>
                </div>
                <div className='company-side'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">B</Avatar>
                    <Paper className="paper">
                        Hello, I'm a Company
                    </Paper>
                </div>
                <div className='connector-side'>
                    <Paper className="paper" variant='outlined'>
                        Hello, I'm a Connector
                    </Paper>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >A</Avatar>
                </div>
                <div className='company-side'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">B</Avatar>
                    <Paper className="paper">
                        Hello, I'm a Company
                    </Paper>
                </div>
                <div className='connector-side'>
                    <Paper className="paper" variant='outlined'>
                        Hello, I'm a Connector
                    </Paper>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >A</Avatar>
                </div>
                <div className='company-side'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">B</Avatar>
                    <Paper className="paper">
                        Hello, I'm a Company
                    </Paper>
                </div>
                <div className='connector-side'>
                    <Paper className="paper" variant='outlined'>
                        Hello, I'm a Connector
                    </Paper>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >A</Avatar>
                </div>
                <div className='company-side'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">B</Avatar>
                    <Paper className="paper">
                        Hello, I'm a Company
                    </Paper>
                </div>
                <div className='connector-side'>
                    <Paper className="paper" variant='outlined'>
                        Hello, I'm a Connector
                    </Paper>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >A</Avatar>
                </div>
                <div className='company-side'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">B</Avatar>
                    <Paper className="paper">
                        Hello, I'm a Company
                    </Paper>
                </div>
                <div className='connector-side'>
                    <Paper className="paper" variant='outlined'>
                        Hello, I'm a Connector
                    </Paper>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >A</Avatar>
                </div>
                <div className='company-side'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">B</Avatar>
                    <Paper className="paper">
                        Hello, I'm a Company
                    </Paper>
                </div>
                <div className='connector-side'>
                    <Paper className="paper" variant='outlined'>
                        Hello, I'm a Connector
                    </Paper>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >A</Avatar>
                </div>
                <div className='company-side'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">B</Avatar>
                    <Paper className="paper">
                        Hello, I'm a Company
                    </Paper>
                </div>
                <div className='connector-side'>
                    <Paper className="paper" variant='outlined'>
                        Hello, I'm a Connector
                    </Paper>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >A</Avatar>
                </div>
                <div className='company-side'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">B</Avatar>
                    <Paper className="paper">
                        Hello, I'm a Company
                    </Paper>
                </div>
                <div className='connector-side'>
                    <Paper className="paper" variant='outlined'>
                        Hello, I'm a Connector
                    </Paper>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >A</Avatar>
                </div>
                <div className='company-side'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">B</Avatar>
                    <Paper className="paper">
                        Hello, I'm a Company
                    </Paper>
                </div>
                <div ref={messagesEndRef} />
            </CardContent>
        </Card>
    </div>
  );
};

export default InnerChat;
