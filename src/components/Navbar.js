import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar({ title, aboutText, mode, toggleMode }) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <strong>{title}</strong>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                {aboutText}
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button
                            className={`btn btn-${mode === 'light' ? 'dark' : 'light'} mx-2`}
                            onClick={toggleMode}
                            title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
                        >
                            {mode === 'light' ? <FaMoon /> : <FaSun />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

