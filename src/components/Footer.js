import React from 'react';
import logo from '../assets/Pokemon-emblema.jpg';

//Material UI
import { makeStyles } from '@material-ui/core';
import { TypographyStyled } from '../styled/styledComponents';
import { Link } from 'react-router-dom';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.footer__logo}>
          <Link to='/'>
            <img className={classes.footer__logoImage} src={logo} alt='Logo'/>
          </Link>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%', 
        padding: theme.spacing(6),
        backgroundColor: '#131921',
        height: '20px',
    },
    footer__container: {
      width: '80%',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    footer__logo: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(0),
    },
    footer__logoImage: {
      width: '100px'
    }
}));

export default Footer;