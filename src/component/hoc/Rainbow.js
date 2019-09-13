import React from "react";

const Rainbow = (WrappedComponent) => {
    const colours = ['pink', 'red', 'yellow', 'green', 'blue', 'orange'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour+'-text';

    return(props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Rainbow;