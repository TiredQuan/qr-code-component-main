import React from "react";
import ReactDOM from "react-dom";
import '../src/index.css'

function H1() {
    return (
        <div className="main">
            <div className="qr">
                <img src={"image-qr-code.png"} alt="qr-code" />
            </div>
            <div className="words">
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}

ReactDOM.render(<H1/>, document.getElementById('root'))