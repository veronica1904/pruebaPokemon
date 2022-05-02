import React, { useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, listAsyn } from '../../redux/actions/actionPokemon';
import Edit from './Edit';

const List = () => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [enviarDatosModal, setEnviarDatosModal] = useState([])

    const { pokemones } = useSelector(store => store.pokemones)

    useEffect(() => {
        dispatch(listAsyn())
    }, [])

    const editar = (codigo) => {
        //--------t=conseguir los datos de ese objeto con ese codigo--------------//
        const traerelpokemon= pokemones.find(t => t.codigo === codigo)

        setModal(true)
        setEnviarDatosModal(traerelpokemon)


    }

    return (
        <div>
            <table>
                <thead>
                </thead>
                <tbody>
                    {
                        pokemones.map((p, index) => (
                            <tr key={index}>
                                <td>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: p.foto
                                        },
                                        largeImage: {
                                            src: p.foto,
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />
                                </td>
                                <td>{p.nombre}</td>
                                <td>{p.codigo}</td>
                                <td>{p.tipo}</td>
                                <td>{p.peso}</td>
                                <td>

                                    <button  margin={10} onClick={() => dispatch(deleteAsync(p.codigo))}> <image onClick={() => dispatch(deleteAsync(p.codigo))} width={20} src='' /> eliminar </button>
                                    <button margin={10} onClick={() => editar(p.codigo)}> <image onClick={() => editar(p.codigo)} width={20} src='' />editar </button>

                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            {
                modal === true ? <Edit modal={enviarDatosModal} /> : ''
            }
        </div>
    );
};

export default List;