import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Infoperso from './infoperso';
import Competence from './competence';
import Experience from './experience';

export default function App() {
    return (
        <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
            <h1>Mon CV</h1>
            <hr />
            <Infoperso />
            <Competence />
            <Experience />
        </div>
    );
}


