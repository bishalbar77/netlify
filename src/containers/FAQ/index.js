import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CenterFocusStrong } from '@material-ui/icons';
import { faqs } from '../../Shared/constant/codeConstant';
import { CircularProgress } from '@material-ui/core';
import { pageAnimation } from '../../Shared/utils/animation';
import { motion } from 'framer-motion';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    paddingLeft: '10%',
    // paddingTop:'1%',
    // display: 'flex',
    // // alignItems: 'center',
    //justifyContent: 'center',
    // flexDirection:'column'
    marginTop: '20px',
    marginBottom: '20px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: `bold`,
    /* whiteSpace:`nowrap`,
    textOverflow:"ellipsis",
    overflow:"hidden" */
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function FAQ() {
  const [data, setdata] = useState();
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  // let data = 'No data';
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    setdata(
      faqs.map(({ index, label, value }) => {
        return (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content"`}
              id={`panel${index}bh-header"`}
            >
              <h3>{label}</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{value}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })
    );
  }, [faqs, expanded]);

  return (
    <motion.div
      className={classes.root}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {data ? data : <CircularProgress />}
    </motion.div>
  );
}
