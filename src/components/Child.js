import React from 'react'
import GrandChild from './GrandChild'

const Child = ({ name, age }) => {
    return (
        <>
            <div>Tôi là child {name}, tôi đang {age} tuổi</div>
            <GrandChild index={5} />
        </>
    )
}

export default Child;