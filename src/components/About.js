import React from 'react';

export default function About({ mode }) {
  return (
    <div className={`container bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'}`}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${mode === 'dark' ? 'bg-dark text-light' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>React-JS Introduction</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'}`}>
              <strong>React-JS Introduction</strong> React.js is a popular JavaScript library used for building user interfaces (UI), especially for single-page applications (SPAs). It was developed by Facebook (now Meta) and is maintained by Meta along with a community of developers.
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${mode === 'dark' ? 'bg-dark text-light' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Projects</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'}`}>
              <strong>Projects</strong> University Website, Weather-App, News-App, Text-Utils, Todo-App, Calculator, Portfolio, and many more. These projects showcase the versatility and power of React.js in building dynamic and interactive web applications.
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${mode === 'dark' ? 'bg-dark text-light' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'}`}>
              <strong>Browser Compatibility</strong> React.js is compatible with all modern web browsers. It uses a virtual DOM to optimize rendering performance and provides a consistent experience across different browsers. The library is regularly updated to support the latest web standards and browser features.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
