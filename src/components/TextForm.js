import React, { useState } from 'react';
import { FaCopy, FaTrash, FaTextHeight, FaTextWidth } from 'react-icons/fa';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClrText = () => {
        setText("");
        props.showAlert("Text cleared!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        props.showAlert("Text copied to clipboard!", "success");
        setTimeout(() => setCopied(false), 2000);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed!", "success");
    }

    return (
        <>
            <div className="container">
                <h2 className="mb-4">{props.heading}</h2>
                <div className="form-group">
                    <textarea 
                        className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}
                        id="myBox" 
                        onChange={handleOnChange} 
                        value={text} 
                        rows="8"
                        placeholder="Enter your text here..."
                    ></textarea>
                </div>
                <div className="d-flex flex-wrap gap-2 my-3">
                    <button 
                        className="btn btn-primary" 
                        onClick={handleClick}
                        title="Convert to UPPERCASE"
                    >
                        <FaTextHeight className="me-2" />UPPERCASE
                    </button>
                    <button 
                        className="btn btn-primary" 
                        onClick={handleLowClick}
                        title="Convert to lowercase"
                    >
                        <FaTextWidth className="me-2" />lowercase
                    </button>
                    <button 
                        className="btn btn-success" 
                        onClick={handleCopy}
                        title="Copy to clipboard"
                    >
                        <FaCopy className="me-2" />{copied ? 'Copied!' : 'Copy'}
                    </button>
                    <button 
                        className="btn btn-danger" 
                        onClick={handleClrText}
                        title="Clear text"
                    >
                        <FaTrash className="me-2" />Clear
                    </button>
                    <button 
                        className="btn btn-warning" 
                        onClick={handleExtraSpaces}
                        title="Remove extra spaces"
                    >
                        Remove Extra Spaces
                    </button>
                </div>
            </div>

            <div className="container mt-4">
                <h2>Text Summary</h2>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">
                            <strong>Words:</strong> {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
                        </p>
                        <p className="card-text">
                            <strong>Characters:</strong> {text.length}
                        </p>
                        <p className="card-text">
                            <strong>Reading Time:</strong> {Math.ceil(0.008 * text.split(" ").length)} minutes
                        </p>
                    </div>
                </div>

                <h2 className="mt-4">Preview</h2>
                <div className={`card bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <div className="card-body">
                        <p className="card-text">
                            {text.length > 0 ? text : "Enter something in the textbox above to preview it here"}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}