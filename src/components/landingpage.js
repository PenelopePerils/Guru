import React, { Component } from 'react';
import Grid from './grid';
import Cell from './cell';
class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid" />
                <Cell col={12} />
                <img
                    src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png"
                    alt="avatar"
                    className="avatar-img"
                />
                <div>
                    <div className="banner-text">
                        <h1>I am learning</h1>
                        <hr />
                        <p>Learn | Be Happy | Succeed </p>

                        <div className="social-links">

                            
            <a href="https://www.linkedin.com/in/lisa-o-keefe-5b086b2a/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Youtube */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a> */}
                      </div>
                    </div>
                    <Cell />
                    <Grid />
                </div>
            </div>
        )
    }
}

export default Landing;