import React from 'react'

const Alert = ({alertMessage, closeAlert}) => {

    const styler = alertMessage.includes('Sent') ? 'success' : 'error'

    return (
        <div className={"alert-container" + ` ${styler}`}>
            <h2>{styler === 'success' ? 'Success!' : 'There was an error'}</h2>
            <p>{alertMessage}</p>
            <button onClick={closeAlert}>OK</button>
        </div>
    )
}

export default Alert
