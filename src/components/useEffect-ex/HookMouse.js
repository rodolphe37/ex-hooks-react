import React, { useState, useEffect } from 'react';

function HookMouse() {

    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const logMousePosition = e => {
        console.log("Mouse event")
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener("mousemove", logMousePosition)

        return () => {
           console.log("Component unmounting code")
           window.removeEventListener("mousemove", logMousePosition) 
        }
    }, []);

    return (
        <div>
            Hooks X - {x}  Y - {y}
        </div>
    )
};

export default HookMouse;