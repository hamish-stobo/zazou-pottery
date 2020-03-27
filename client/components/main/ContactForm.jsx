import React, { useState } from 'react'

const Form = ({preFill}) => {
    
    const [state, setState] = useState({
        name: '',
        email: '',
        message: !!preFill ? preFill : ''
    })

    const { message } = state

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setState({
            ...state,
          [e.target.name]: e.target.value
        })
      }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('state to be submitted', state)
    }

    console.log(state)
    

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
