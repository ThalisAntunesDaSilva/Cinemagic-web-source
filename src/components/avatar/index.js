import React,{useState} from 'react';
import './styles.css';
export default function Avatar(){


    return (
        <>
            <div className = "main-div">
                <figure className= "img-user">
                    <img src = {JSON.parse(localStorage.getItem("cliente")).pathImage}></img>
                </figure>
            </div>
        </>
    );
}

