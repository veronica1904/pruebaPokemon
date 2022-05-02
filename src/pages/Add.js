import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addFormikAsync } from '../redux/actions/actionProducts';
import { makeStyles } from '@material-ui/core';
import { FileUp } from '../helpers/FileUp';
import { useNavigate } from 'react-router-dom';
import { ButtonStyled } from '../styled/styledComponents';

const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    categoria: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    codigo: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    precio: Yup.number()
});

const Add = () => {
    const classes = useStyles();
    const [fileImage, setFileImage] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleFileChange=(e)=>{
        const file = e.target.files[0]
        console.log(file)
        //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
             FileUp(file)
             .then(resp=>{
                 console.log(resp)
                 setFileImage(resp);
             })
             .catch(error =>{
                 console.warn(error)
             })
     }

    const handleSubmit = (values) => {
        values.image__front = fileImage;
        console.log('VALUE FILE IMAGE ', values);
        dispatch(addFormikAsync(values));
        navigate('/products');
    }

    return (
      <div className={classes.order}>
        <div className={classes.order__container}>
        <Formik
          initialValues={{
            nombre: '',
            categoria: '',
            altura:'',
            peso:'',
            habilidades:'',
            evolucion:'',
            image__front: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
            handleSubmit(values)
          }}
        >
          {({ errors, touched, handleSubmit, handleChange, handleReset }) => (
            <Form className={classes.order__form}
            style={{
              
            }}
            >
                    <h1>Registro Pokémon</h1>
            <div className={classes.order__box}>
            <label>Nombre Pokémon</label>
              <Field placeholder="Nombre Pokémon" name="nombre" />
              {errors.nombre && touched.nombre ? (
                <div>{errors.nombre}</div>
              ) : null}
            </div>
    
            <div className={classes.order__box}>
            <label>Categoria</label>
              <Field placeholder="Categoria" name="categoria" />
              {errors.categoria && touched.categoria ? (
                <div>{errors.categoria}</div>
              ) : null}
            </div>
            <div className={classes.order__box}>
            <label>Altura</label>
              <Field placeholder="Altura" name="altura" />
              {errors.altura && touched.altura ? (
                <div>{errors.altura}</div>
              ) : null}
            </div>
            <div className={classes.order__box}>
            <label>Peso</label>
              <Field placeholder="Peso" name="peso" />
              {errors.peso && touched.peso? (
                <div>{errors.peso}</div>
              ) : null}
            </div>
            <div className={classes.order__box}>
            <label>Habilidades</label>
              <Field placeholder="Habilidades" name="habilidades" />
              {errors.habilidades && touched.habilidades? (
                <div>{errors.habilidades}</div>
              ) : null}
            </div>
            <div className={classes.order__box}>
            <label>Evoluciones</label>
              <Field placeholder="Evolución" name="evolucion" />
              {errors.evolucion && touched.evolucion? (
                <div>{errors.evolucion}</div>
              ) : null}
            </div>
              <Field onChange={handleFileChange} name="image__front" type="file" />
              {/* {errors.file && touched.file ? <div>{errors.file}</div> : null} */}
              <ButtonStyled 
              type="submit">Guardar</ButtonStyled>
            </Form>
          )}
        </Formik>
      </div>
      </div>
    
    )};

const useStyles = makeStyles((theme) => ({
    order: {
        width: '100%',
        height: '100%',
        backgroundImage:
        "url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/go/pokemon-party.jpg)",
    },
    order__container: {
      width: '50%',
      margin: '0rem auto',
      display: 'flex',
      justifyContent: 'center'
    },
    order__form: {
        width: '100%',
        color: 'white',
        borderRadius: '20px',
        padding: theme.spacing(4),
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: 'rgb(4,0,11)',
        background:' linear-gradient(90deg, rgba(4,0,11,1) 0%, rgba(8,9,26,1) 37%, rgba(42,47,87,1) 77%, rgba(59,59,93,1) 100%)',
        gap: theme.spacing(1),
        '& input': {
            width: '100%',
            borderRadius: '9px',
            padding: theme.spacing(.3)
        }
    },
    order__box: {
      width: '100%',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1)
    }
}))

export default Add;