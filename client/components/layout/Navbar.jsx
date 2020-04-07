import React, {useState, useEffect} from 'react'
import { Controller, Scene } from 'react-scrollmagic'

const Navbar = ({selectedItem, isMounted, winWidth}) => {
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
            {winWidth >  750 ? <a href="#top-first-sect" className="nav-icon">Zazou Pottery Studio</a> : <></>}
            <Controller refreshInterval={100}>
            {linksArray.map((item, idx) => {
                        let formatted = item.slice(1, item.length) 
                        formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1)
                        const element = document.querySelector(item)
                        const elHeight = isMounted && element ? element.clientHeight : 0
                    return (
                    <Scene triggerElement={item} duration={elHeight} classToggle={['.' + formatted, 'active-btn']} reverse={true} indicators={false}>
                    <a onClick={() => select(formatted)} 
                        className={`${selected === formatted ? 'active-btn ' + formatted : formatted}`} 
                        key={item + idx} 
                        href={item}>
                    {formatted}
                    </a>
                    </Scene>
                    )
            })}
            </Controller>
        </div>
    )
}

export default Navbar