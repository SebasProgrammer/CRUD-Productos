import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const UserForm = ({setForm, getUsers, userSelected, setUserSelected}) => {

    const { handleSubmit, register, reset } = useForm();
    const inputNull = {name:"", category:"", price:"", isAvailable:false}

    useEffect(()=>{
        if (userSelected) {
            console.log(userSelected)
            reset(userSelected)
        } else {
            reset(null)
        }
    }, [userSelected])

    const submit = (data) => {
        if (userSelected) {
            axios.put(`https://products-crud.academlo.tech/products/${userSelected.id}/`, data)
            .then(()=>{
                getUsers()
                closeForm()
            })
        } else {
            axios.post(`https://products-crud.academlo.tech/products/`, data)
            .then(()=> {
                getUsers()
                closeForm()
            })
        }
    }

    const closeForm = ()=> {
        setForm(false)
        setUserSelected(null)
    }

    return (
        <div>
            <button onClick={() => closeForm()}>Cerrar</button>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" id="name" {...register("name")}/> 
                <input type="text" id="category" {...register("category")}/> 
                <input type="text" id="price" {...register("price")}/> 
                <input type="checkbox" id="isAvailable" {...register("isAvailable")}/> 
                <button type='submit'>{userSelected ? "Actualizar": "Crear Usuario"}Crear producto</button>
            </form>
        </div> 
    );
};

export default UserForm;