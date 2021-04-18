import React from 'react';

export default function NavBar(props){

    const {titulo} = props;

    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <img src="https://slang-production.s3.amazonaws.com/organizations/iu_digital_logo.png" alt="" width="80" height="24" className="d-inline-block align-text-top"/>
                {titulo}
            </div>
      </nav>
    );
}