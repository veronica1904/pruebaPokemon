import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import {  loginWithEmailPassAsync } from '../redux/actions/actionLogin';
import { loginGoogle } from '../redux/actions/actionLogin';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';

//Material UI
import { makeStyles } from '@material-ui/core';
import { ButtonFacebook, ButtonGoogle, LinkRedirect } from '../styled/styledComponents';

const Login = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
      email: '',
      password: '',
  })

  const { email, password } = values;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginWithEmailPassAsync(email, password));
    reset();
    navigate('/');
  }

  const handleGoogle = () => {
      dispatch(loginGoogle());
      navigate('/');
  }

  return (
    <div className={classes.root}>
        <Link to='/'>
        <img 
        className={classes.login__logo}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pok%C3%A9mon_GO_logo.svg/1200px-Pok%C3%A9mon_GO_logo.svg.png'
        alt='Logo'
        />
        </Link>

        <div className={classes.login__container}>
            <h1>Iniciar Sesión</h1>

            <form onSubmit={handleSubmit} className={classes.form}>
                <h5>E-mail</h5>
                <input type='email'
                name='email' 
                value={email}
                placeholder="Ingrese email"
                onChange={handleInputChange}
                />

                <h5>Password</h5>
                <input type='password'
                name='password'
                value={password}
                onChange={handleInputChange}
                /> 

                <button 
                type='submit'
                className={classes.login__signInButton}>Continuar</button>

            <ButtonGoogle 
                type='button'
                onClick={handleGoogle}
                >
                    <img width='20px' height='20px' src={googleIcon} alt='Google Icon'/>
                    Continuar con Google</ButtonGoogle>
                   
                   <ButtonFacebook 
                type='button'
                onClick={handleGoogle}
                >
                    <img width='20px' height='20px' src={facebookIcon} alt='Facebook Icon'/>
                    Continuar con Facebook</ButtonFacebook>
            </form>
            
            <LinkRedirect to='/register'>
                Registrarse
            </LinkRedirect>

         
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        background: 'url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/go/pokemon-party.jpg) center center no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',

        // backgroundImage:
        // "",
        // backgroundRepeat: 'no-repeat'
    },
    login__logo: {
        marginTop: '20px',
        marginBottom: '20px',
        objectFit: 'contain',
        width: '100px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    login__container: {
        width: '300px',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        border: '1px solid lightgray',
        padding: '20px',
        '& h1': {
            fontWeight: '500',
            marginBottom: '20px',
        },
        '& p': {
            marginTop: '15px',
            fontSize: '12px'
        }
    },

    form: {
        '& h5': {
            marginBottom: '5px'
        },
        '& input': {
            height: '30px',
            marginBottom: '10px',
            backgroundColor: 'white',
            borderRadius: '20px',
            width: '98%',
            padding: '0 10px 0 29px',
        }
    },
    login__signInButton: {
        background: '#B0D9EE',
        borderRadius: '20px',
        width: '100%',
        height: '30px',
        border: '1px solid',
        marginTop: '10px',
        borderColor: '#a88734 #9c7e31 #846a29',
        cursor: 'pointer',
        '&:hover': {
            opacity: '.9'
        }
    },
    login__registerButton: {
        borderRadius: '20px',
        width: '100%',
        height: '30px',
        border: '1px solid',
        marginTop: '10px',
        borderColor: 'darkgray'
    },

   
}))

export default Login