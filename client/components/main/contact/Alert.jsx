import React from 'react'

const Alert = ({alertMessage, closeAlert}) => {
    return (
        <div>
            <h1>This is the error component</h1>
            <span>{alertMessage}</span>
            <button onClick={closeAlert}>OK</button>
        </div>
    )
}

export default Alert
