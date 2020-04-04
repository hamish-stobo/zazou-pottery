import React from 'react'

const OrderIcon = ({i, filepath, passIndex}) => {
    
    return (
        <div>
            <a href="#contact" >
                <span onClick={() => passIndex(i, filepath)} className="order-icon" src="images/orderIcon.svg">Order Me</span>
                {/* <img onClick={() => passIndex(i, filepath)} className="order-icon" src="images/orderIcon.svg" /> */}
            </a>
        </div>
    )
}

export default OrderIcon
