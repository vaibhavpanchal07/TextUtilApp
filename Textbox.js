import React, { useState } from 'react';
import AlertBox from './AlertBox';
export default function Textbox({ heading, mode, input }) {
    const [alert, setAlert] = useState(null);
    const [text, setText] = useState("");
    function showAlert(msg) {
        setAlert(msg);
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }
    function upper(event) {
        setText(text.toUpperCase());
        showAlert("Converted to Uppercase !!")
    }
    function lower(event) {
        setText(text.toLowerCase());
        showAlert("Converted to Lowercase !!")
    }
    function remspc() {
        let resStr = text.replace(/ +/g, ' ');
        setText(resStr.trim());
        showAlert("Extra spaces removed !!")
    }
    function clr(event) {
        setText("");
        showAlert("Cleared !!")
    }

    function handleChange(e) {
        setText(e.target.value);
        document.querySelector(".copied").innerHTML = "";
    }

    function findStr(e) {
        // let val = e.target.value;
        // let regX = /val/ig;
        // let arr = regX.exec();
        // while(true){
        //     if(arr==!null){
        //         arr[0]
        //     }
        // }
        // document.querySelector(".preview").innerHTML = e.target.value;
    }
    function copyText() {
        const copyText = document.querySelector("#exampleFormControlTextarea1").value;
        navigator.clipboard.writeText(copyText)
        showAlert("Copied !!")
    }


    return (

        <div className="mb-3 container my-5">
            <h2>{heading}</h2>
            <AlertBox title={alert} />
            <textarea autoFocus placeholder="Enter text here..." value={text} onChange={handleChange} className={`${input} form-control`} id="exampleFormControlTextarea1" rows="6"></textarea>
            <div className='buttons'>
                <button className='btn btns btn-warning me-2' onClick={copyText} >Copy Text</button>
                <button className='btn btns btn-primary me-2' onClick={upper} >Convert to Uppercase</button>
                <button className='btn btns btn-primary me-2' onClick={lower} >Convert to Lowercase</button>
                <button className='btn btns btn-success me-2' onClick={remspc} >Remove xtra Spaces</button>
                <button className='btn btns btn-danger me-2' onClick={clr} >Clear</button>
            </div>
            <p className='copied'></p>
            <input onChange={findStr} className={`${input} form-control`} type="search" placeholder='Find' />
            <h2 className='my-3'>Your text Summary</h2>
            <p className='ms-1 mb-0 mt-3'>{text.split(" ").length-1} Words and {text.length} Characters</p>
        </div>

    );
}