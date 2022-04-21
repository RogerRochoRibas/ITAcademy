import React from 'react'
import App from './App.js'

export default function Main(props) {

    return <div>
        <h2>¿Qué quieres hacer?</h2>
        <ul>{props.Ships}</ul>
    </div>
}