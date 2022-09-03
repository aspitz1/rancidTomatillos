import React from 'react'
import './styles.scss'

const PageNotFound = () => {
    return (
        <div style={{display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "space-around",
            height: '90vh',
            width: 'auto',
            fontSize: '3em',
            color: '#00BD2E'
            }}>
            <h2>404 Page not found</h2>
        </div>
    );
}

export default PageNotFound;