import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="w-full rounded">
                    <img src="https://www.cdgi.com/wp-content/uploads/2019/05/404-Pages.jpg" />
                </div>
                {/* <div className="notfound-404">
                    <h1>4<span>0</span>4</h1>
                </div> */}
                <h2>the page you requested could not found</h2>
                <Link to='/' className="button px-3 py-2 rounded">GO to back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;