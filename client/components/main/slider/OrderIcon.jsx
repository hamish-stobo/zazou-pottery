import React from 'react'

const OrderIcon = ({i}) => {
    
    return (
        <div>
            <img onClick={() => console.log(i)} className="order-icon" src="images/orderIcon.svg" />
        </div>
    )
}

export default OrderIcon
