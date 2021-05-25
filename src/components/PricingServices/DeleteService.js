import React from 'react'
import { firestore } from "../../Util-Functions/config"; 

export default function DeleteService(props) {
  
    const service = props.service;
    const arrayServices = props.arrayServices;
    const indexService = arrayServices.indexOf(service)

    const handleDelete = (event) => {
        event.preventDefault();
        arrayServices.splice(indexService, 1);
        props.deleteService(arrayServices);
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

