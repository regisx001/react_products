'use client'

import { useState } from "react";


const Card = () => {
    const [cart, setCart] = useState([]);

    return (
        <div>
            <h1 className="h1 font-bold">This is Card</h1>
            <pre className="pre">
                {JSON.stringify(cart, null, 2)}
            </pre>
        </div>
    )
}


export default Card