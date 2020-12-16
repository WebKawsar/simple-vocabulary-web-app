import { Box, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const useStyles = makeStyles({
    root: {

    },
    paper: {
        padding: "15px 15px"
    }



  });

const SingleWordDetails = () => {

    const { id } = useParams();

    const [singleWord, setSingleWord] = useState({});
    useEffect(() => {

        fetch(`https://simple-vocabulary-web-app.herokuapp.com/wordById/${id}`)
        .then(response => response.json())
        .then(result => setSingleWord(result))

    }, [id])

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} sm={12} md={12}>
                <Paper className={classes.paper}>
                    <Box>
                        <h3>{singleWord.word}</h3>
                        <p>({singleWord.category}) {singleWord.definations}</p>
                    </Box>
                </Paper>
            </Grid>
        </>
    );
};

export default SingleWordDetails;