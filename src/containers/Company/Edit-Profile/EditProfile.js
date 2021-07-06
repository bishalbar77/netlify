import React from 'react'
import './EditProfile.scss'
import {
    Card,
    CardContent,
    Container,
    createMuiTheme,
    Grid,
    Paper, TextField,
    ThemeProvider,
    Typography
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Quicksand'
        ].join(','),
        fontWeight:[
            300,400,500,600,700
        ].join(','),
    },
});

const EditProfile = () =>{
    return(
        <ThemeProvider theme={theme}>
            <div className='edit-profile'>
                <form noValidate autoComplete="off">
                    <Container>
                        <Typography variant="h2" gutterBottom>Edit Profile</Typography>

                        {/*BASIC DETAILS*/}
                        <Paper className='paper' variant="outlined">
                            <Typography variant="h4" gutterBottom>Basic Details</Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardContent className='card-content'>
                                            <TextField className='input-fields' id="outlined-basic" label="Company Name" variant="outlined" disabled={true} defaultValue="Iron Man"/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardContent className='card-content'>
                                            <TextField className='input-fields' id="outlined-basic" label="Email Address" variant="outlined" disabled={true} defaultValue="IronManC1@gmail.com"/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>

                        {/*DOCUMENT DETAILS*/}
                        <Paper className='paper' variant="outlined">
                            <Typography variant="h4" gutterBottom>Document Details</Typography>
                            <Grid container>
                                <Grid xs={12} sm={8} container spacing={2} className='document-container'>
                                    <Grid item xs={12} sm={6}>
                                        <Card>
                                            <CardContent className='card-content'>
                                                    <TextField className='input-fields' id="outlined-basic" label="GSTIN Number" variant="outlined" disabled={true} defaultValue="27AAPFU0939F1ZV"/>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Card>
                                            <CardContent className='card-content'>
                                                    <TextField className='input-fields' id="outlined-basic" label="CIN Number" variant="outlined" disabled={true} defaultValue="U12345DL2020PLC098765"/>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Card>
                                            <CardContent className='card-content'>
                                                    <TextField className='input-fields' id="outlined-basic" label="State" variant="outlined" disabled={true} defaultValue="Maharashtra" />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Card>
                                            <CardContent className='card-content'>
                                                    <TextField className='input-fields' id="outlined-basic" label="Mobile Number" variant="outlined" defaultValue="1122334455" type='number' minLength='10' maxLength='10' />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} sm={4} container spacing={2} className='document-container'>
                                    <Grid item xs={12}>
                                        <Card>
                                            <CardContent className='card-content'>
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        className='input-fields'
                                                        variant="outlined"
                                                        multiline
                                                        rows={2}
                                                        rowsMax={2}
                                                        label="Address"
                                                        defaultValue="aa bb cc dd ee ff gg hh ii jj kk ll mm nn oo pp qq rr ss tt uu vv ww xx yy zz"/>
                                                    <TextField className='input-fields pincode' id="outlined-basic" label="Pincode" variant="outlined" defaultValue="473001" type='number'/>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>

                        {/*ABOUT DETAILS*/}
                        <Paper className='paper' variant="outlined">
                            <Typography variant="h4" gutterBottom>About Company Details</Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={4}>
                                    <Card>
                                        <CardContent className='card-content'>
                                            <Autocomplete
                                                id="combo-box-demo"
                                                options={top100Films}
                                                getOptionLabel={(option) => option.title}
                                                renderInput={(params) => <TextField {...params} label="Sectors" variant="outlined" className='input-fields' />}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Card>
                                        <CardContent className='card-content'>
                                            <Autocomplete
                                                multiple
                                                id="tags-outlined"
                                                options={top100Films}
                                                getOptionLabel={(option) => option.title}
                                                filterSelectedOptions
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        variant="outlined"
                                                        label="SubSectors"
                                                        placeholder="Favorites" className='input-fields'
                                                    />
                                                )}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Card>
                                        <CardContent className='card-content'>
                                            <TextField
                                                id="outlined-multiline-static"
                                                className='input-fields'
                                                variant="outlined"
                                                multiline
                                                rowsMax={1}
                                                label="Company Description"
                                                defaultValue="aa bb cc dd ee ff gg hh ii jj kk ll mm nn oo pp qq rr ss tt uu vv ww xx yy zz"/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>

                        {/*About Author*/}
                        <Paper className='paper' variant="outlined">
                            <Typography variant="h4" gutterBottom>LETS KNOW MORE ABOUT YOU</Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardContent className='card-content'>
                                            <TextField className='input-fields' id="outlined-basic" label="Name" variant="outlined" defaultValue="Iron Man"/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardContent className='card-content'>
                                            <TextField className='input-fields' id="outlined-basic" label="Designation" variant="outlined" defaultValue="IronManC1@gmail.com"/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardContent className='card-content'>
                                            <TextField className='input-fields' id="outlined-basic" label="Mobile Number" variant="outlined" defaultValue="9407236144"/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardContent className='card-content'>
                                            <TextField className='input-fields' id="outlined-basic" label="Email Address" variant="outlined" defaultValue="IronManC1@gmail.com"/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Container>
                </form>
        </div>
        </ThemeProvider>
    )
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 }
    ]

export default EditProfile;