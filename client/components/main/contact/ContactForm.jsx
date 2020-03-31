import React, { useState, useEffect } from 'react'
import Alert from './Alert.jsx'

const Form = ({preFill}) => {
    
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
        alert: ''
    })

    const { name, email, message, alert } = state

    useEffect(() => {
        setState({ ...state, message: preFill ? preFill : ''});
      }, [preFill])
    
    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setState({
            ...state,
          [e.target.name]: e.target.value
        })
      }

     const handleSubmit = e => {
        e.preventDefault()
        fetch('/send',{
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then( response => response.json())
      .then( response => {
      if (response.status === 'success'){
        setState({alert: 'Message Sent!'})
      } else if(response.status === 'fail'){
        setState({alert: 'Message failed to send.'})
      }
    })
    }

    const closeAlert = () => {
      setState({
        ...state,
        name: '',
        email: '',
        message: '',
        alert: ''
      })
    }
    

    return (
        <>
        {alert && <Alert alertMessage={alert} closeAlert={closeAlert}/>}
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} value={name} required/>
            
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} value={email} required/>
            
            <label>Message:</label>
            <input type="textarea" name="message" value={message} onChange={handleChange} required/>
            
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}


export default Form
