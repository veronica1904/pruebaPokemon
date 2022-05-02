import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAsync } from '../redux/actions/actionProducts';


//Material UI
import { makeStyles, Typography } from '@material-ui/core';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { CustomAlert, SignUpButton } from '../styled/styledComponents';
import { useNavigate } from 'react-router-dom';


const WithoutProducts = () => {
  const navigate = useNavigate();
  return (
    <CustomAlert>
        <MoodBadIcon></MoodBadIcon>
        <Typography>LO SENTIMOS</Typography>
        <Typography>No tenemos Pokémon agregados a está categoría</Typography>
        <SignUpButton onClick={() => navigate('/order')}>Agrega un producto</SignUpButton>
    </CustomAlert>
  )
}

const Products = () => {
  const classes = useStyles();
  const { products } = useSelector(store => store.products);
  const [selected, setSelected] = useState('otros');

  const dispatch = useDispatch();

  const datosFiltrados = products.filter(item => item.categoria === selected);


  useEffect(() => {
    dispatch(listAsync());
  }, []);

 

  return (
  
    <div className={classes.products}>
        <div className={classes.products__content}>
            <h5>Lista Pokémon</h5>
            
        </div>
    
        
        {/*  */}
        {datosFiltrados.length === 0?
         <WithoutProducts /> :
         <div className={classes.products__container}>
        
         </div>
        }
        {/*  */}
       
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    products: {
      width: '100%',
      minHeight: '100vh',
      padding: '2rem 0',
      position: 'relative',
      backgroundImage:
      "url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/go/pokemon-party.jpg)",
    },
    products__container: {
      width: '94%',
      margin: '4rem auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'auto',
      gap: theme.spacing(4)
    },
    products__content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    products__contentFlex: {
      display: 'flex',
      gap: theme.spacing(6),
      margin: '1.4rem 0',
      textAlign: 'center',
    },
    products__option: {
      fontWeight: '400',
      color: '#666',
      cursor: 'pointer',
    }
}))

export default Products