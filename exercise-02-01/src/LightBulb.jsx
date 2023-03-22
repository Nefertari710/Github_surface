import { useState } from "react";
//Exercise Six - A stateful component
function LightBulb(){
    const [ison, setclose] = useState(true) 
    return (
        <button onClick={() => setclose(!ison)}>
            {ison ? <img src="../public/light-off.png" />:<img src="../public/light-on.png" />}
        </button>
    );
}

export default LightBulb;