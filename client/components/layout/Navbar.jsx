import React, {useState, useEffect} from 'react'
import { Controller, Scene } from 'react-scrollmagic'

const Navbar = ({selectedItem}) => {
    const linksArray = ['#about', '#services', '#catalogue', '#contact']
    const [selected, setSelected] = useState('')

    useEffect(() => {
        setSelected(selectedItem ? selectedItem : '')
      }, [selectedItem])

    const select = string => {
        setSelected(string)
    }

    return (
        <div className="navbar">
            {linksArray.map((item, idx) => {
                        let formatted = item.slice(1, item.length) 
                        formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1)
                    return (
                    <a onClick={() => select(formatted)} 
                        className={`${selected === formatted ? 'active-btn' : ''}`} 
                        key={item + idx} 
                        href={item}>{formatted}
                    </a>
                    )
            })}
        </div>
    )
}

export default Navbar