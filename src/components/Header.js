import React, {  useState } from 'react'
import logo from '../assets/Pokemon-emblema.jpg';
import SearchIcon from "@material-ui/icons/Search";
import { logoutAsync } from '../redux/actions/actionLogin';
import { useDispatch } from 'react-redux';
//Material ui
import { makeStyles } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();
  const [user] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate('/login');
  }

  return (
    <div>
      <div className={classes.header__container}>
        <Link to='/'>
          <img
            className={classes.logo}
            src={logo} />
        </Link>

        <div
          className={classes.header__search}
        >
          <input
            className={classes.header__searchInput}
            type='text'
          />
          <SearchIcon
            className={classes.header__searchIcon} />
        </div>
        <div
          className={classes.header__nav}
        >
          {/* /Crud pokemon */}
          <Link to='/list'>
            <div className={classes.header__option}>
              <span
                className={classes.header__optionLineOne}
              >

              </span>
              <span
                className={classes.header__optionLineTwo}
              >
                Lista de Pokemón
              </span>
            </div>
          </Link>
          <Link to='/add'>
            <div className={classes.header__option}>
              <span
                className={classes.header__optionLineOne}
              >
              </span>
              <span
                className={classes.header__optionLineTwo}
              >
                Crear Pokemón
              </span>
            </div>
          </Link>

          {/* /login */}
          <Link to='/login'>
            <div
              onClick={handleLogout}
              className={classes.header__option}>
              <span
                className={classes.header__optionLineOne}
              >
                {!user ? '' : user.email}
              </span>
              <span
                className={classes.header__optionLineTwo}
              >
                {user ? 'Sign In' : 'Cerrar Sesión'}
              </span>
            </div>
          </Link>
        </div>
        <div>
        </div>
      </div>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  header__container: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#131921',

  },
  logo: {
    width: '100px',
    objectFit: 'contain',
    margin: '0 20px',
    marginTop: theme.spacing(1)
  },
  header__search: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    borderRadius: '20px'
  },
  header__searchInput: {
    height: '12px',
    padding: '15px',
    border: 'none',
    width: '50%',
    borderRadius: '24px',

  },
  header__searchIcon: {
    padding: '5px',
    height: '22px !important',
    backgroundColor: '#B0D9EE',
    borderRadius: '24px'
  },
  header__nav: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  header__option: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    marginRight: '10px',
    color: 'white',
    cursor: 'pointer'
  },
  header__optionLineOne: {
    fontSize: '10px'
  },
  header__optionLineTwo: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
    fontWeight: '800'
  },
  header__optionBasket: {
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  },
  header__basketCount: {
    fontSize: '13px',
    fontWeight: '800',
    marginLeft: '10px',
    marginRight: '10px'
  }


}))

export default Header
