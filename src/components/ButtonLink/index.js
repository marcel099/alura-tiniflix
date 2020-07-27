import React from 'react';

function ButtonLink(props) {
    // props => { className: 'O que alguém passar', href: '/'}

    const { children, className, href } = props
    console.log(props)

    return (
        <a href={href} className={className}>
            {children}
        </a>
    )
}

export default ButtonLink;