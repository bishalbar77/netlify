import { Container, Typography, Paper } from '@material-ui/core';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../Shared/utils/animation';
import './AboutUs.scss';

const AboutUS = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit='exit'
      initial='hidden'
      animate='show'
      className='AboutUS'
    >
      <Container maxWidth='lg' className='container'>
        <Paper elevation={3} className='about-us-paper'>
          <Typography variant='h3' className='about-us-heading'>
            Welcome to InConnectors!
          </Typography>
          <Typography variant='subtitle1'>
            We are a team of experienced sales professionals who believe that
            companies when they want to expand their businesses need connections
            in the market. They need reliable people that can introduce them to
            the right buyers and help them get their business done.
          </Typography>
          <Typography variant='subtitle1'>
            These connectors have a deep understanding of the clients that they
            work with and are usually very strong decision influencers. At the
            same time, companies spend a big portion of their revenues on their
            sales team making these connections with the clients. Connectors can
            get them better sales numbers at a fraction of the cost.
          </Typography>
          <Typography variant='subtitle1'>
            While companies have a lot of advantages when it comes to getting
            these connections built, connectors are the ones that help them do
            this. These connectors are the real value addition in the entire
            process as they help buyers make the right decisions. Companies are
            willing to handsomely compensate connectors for their introductions.
            This can become a very good second source of income or even the full
            time job for people that have connections in the market.
          </Typography>
          <Typography variant='subtitle1'>
            Ours is the only platform for the companies and connectors to find
            each other and get business done. And we strive to make SMEs and
            Startups accelerate their growth with the help of right connections.
          </Typography>
        </Paper>
      </Container>
    </motion.div>
  );
};

export default AboutUS;
