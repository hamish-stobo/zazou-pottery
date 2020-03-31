import React, {useState} from 'react'

const Navbar = () => {
    const linksArray = ['#about', '#services', '#gallery', '#contact']
    const [selected, setSelected] = useState('')
    const select = string => {
        setSelected(string)
    }
    return (
        <div className="navbar">
            <div>
                {linksArray.map((item, idx) => {
                    let formatted = item.slice(1, item.length) 
                    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1)
                return (<a onClick={() => select(formatted)} 
                    className={`${selected === formatted ? formatted : null}`} 
                    key={item + idx} 
                    href={item}>{formatted}
                    </a>)
                })}
            </div>
        </div>
    )
}

export default Navbar