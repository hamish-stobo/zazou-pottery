import React, { useState, useEffect } from 'react'

const Form = ({preFill}) => {
    
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const { message } = state

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
        console.log(state)
        console.log(JSON.stringify(state))
        fetch('/send',{
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        for(const prop in state) {
            setState({[prop]: ''})
        }
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
      }
    

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" onChange={handleChange} required/>
            </label>
            <label>
                Email:
                <input type="email" name="email" onChange={handleChange} required/>
            </label>
            <label>
                Message:
                <input type="textarea" name="message" value={message} onChange={handleChange} required/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}


export default Form
