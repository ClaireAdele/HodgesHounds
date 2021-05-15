import React from 'react'
import { firestore } from "../../Util-Functions/config"; 

export default function DeleteService(props) {
  
    const service = props.props.service;
    const arrayServices = props.props.arrayServices;
    const indexService = arrayServices.indexOf(service)

    const handleDelete = (event) => {
        event.preventDefault();
        const dbRef = firestore.collection("services").doc("services-pricing");
        arrayServices.splice(indexService, 1);
        dbRef.update({services : arrayServices});
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

