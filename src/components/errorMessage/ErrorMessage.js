import React from 'react';
import './ErrorMeassage.css'

const ErrorMessage = () => {
    return (
        <>
            <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="Error_image"></img>
            <span> Something goes wrong </span>
        </>
    )
}

export default ErrorMessage
