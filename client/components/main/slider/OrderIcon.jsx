import React from 'react'

const OrderIcon = ({i, filepath, passIndex}) => {
    
    return (
        <div>
            <a href="#contact" >
                <img onClick={() => passIndex(i, filepath)} className="order-icon" src="images/orderIcon.svg" /></a>
        </div>
    )
}

export default OrderIcon
