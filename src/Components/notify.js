import React from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

const notify = (message, hasError = false) => {

    if (hasError) {
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } else {
        toast(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }


    return (
        <>

        </>
    )
}

export default notify;
