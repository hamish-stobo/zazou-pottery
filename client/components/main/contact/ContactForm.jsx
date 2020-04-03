import React, { useState, useEffect } from 'react'
import Alert from './Alert.jsx'
import switchCase from '../../../constants/switchCase.js'

const Form = ({preFill}) => {
    console.log(preFill)
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
        alert: '',
        filepath: ''
    })

    const {idx, filepath} = preFill
    const { name, email, message, alert } = state

    useEffect(() => {
        setState({ ...state, 
          message:  idx ? switchCase(idx) : '',
          filepath: filepath ? filepath : ''});
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
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      { 
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
    } else {
      setState({alert: 'Invalid email address.'})
    }
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
            <input type="text" name="name" onChange={handleChange} placeholder="Full Name" value={name} required/>
            
            <input type="email" name="email" onChange={handleChange} placeholder="Email" value={email} required/>
            
            <textarea name="message" placeholder="Your Message" value={message} onChange={handleChange} required/>
            
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}


export default Form
