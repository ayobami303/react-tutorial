import React from "react";

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);

    return(
        <div className='container'>
            <h1 className='center'>Contact</h1>
            <p>In duis labore esse esse cillum laboris culpa tempor adipisicing tempor in et. Non voluptate pariatur id aliqua. Reprehenderit aliquip sint ullamco reprehenderit minim officia nisi aliquip culpa dolore.</p>
        </div>
    )
}

export default Contact;