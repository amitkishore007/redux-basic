import React from 'react'

export default function CounterInput(props) {
    return (
        <button onClick={props.doCount}>{props.children}</button>
    )
}
