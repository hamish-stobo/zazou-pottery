import React from 'react'

const OrderIcon = ({i, passIndex}) => {
    
    return (
        <div>
            <a href="#contact" ><img onClick={() => passIndex(i)} className="order-icon" src="images/orderIcon.svg" /></a>
        </div>
    )
}

export default OrderIcon
