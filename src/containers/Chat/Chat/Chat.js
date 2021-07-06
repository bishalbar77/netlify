import React from 'react';
import {Container, Grid, Paper} from "@material-ui/core";
import ChatBox from "../ChatBox/ChatBox";
import InnerChat from "../InnerChat/InnerChat";
import MessageBox from "../Messages/Messages";

const Chat = () =>{
    return (
        <div style={{margin:'40px auto'}}>
            <Container>
                <Paper variant="outlined">
                    <Grid container spacing={1} style={{padding:'4px'}}>
                        <Grid item xs={12} sm={4}>
                            <Paper variant="outlined">
                                <ChatBox/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container justify="space-between">
                                <Grid item xs={12}>
                                    <InnerChat />
                                </Grid>
                                <Grid item xs={12}>
                                    <MessageBox />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default Chat