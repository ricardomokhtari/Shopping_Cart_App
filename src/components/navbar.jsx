import React, { Component } from 'react';

const Navbar = props => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                Number of Active Counters:
                <span> 
                    <badge className="badge badge-pill badge-secondary">
                        {props.totalCounters}
                    </badge> 
                </span>
            </a>
        </nav> 
    );
};

export default Navbar;
 
