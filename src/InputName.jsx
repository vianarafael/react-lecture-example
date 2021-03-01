import React from 'react'

export default function InputName({onChangeName}) {
    return <input type="text" placeholder="Enter a name" onChange={onChangeName} />
}
