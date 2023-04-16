import React from "react"

const OptionNavBarComponent = (props) => {

    const {category} = props
    return (
        <span className="act-button">{category}</span>
    )
}

export default OptionNavBarComponent