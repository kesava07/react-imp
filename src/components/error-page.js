import React from 'react'
import {Link} from 'react-router-dom'
const ErrorPage=()=>(
    <div>
        <h1 className="text-center text-danger">404</h1>
        <p className="text-center">Page not found...! &nbsp;<Link to="/">Go to home...</Link></p>
    </div>
);
export default ErrorPage;