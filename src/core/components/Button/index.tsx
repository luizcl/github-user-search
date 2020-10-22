import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

type Props = {
    text: string;
    to: string;
    className?: string
}

const Button = ({ text, to, className }: Props) => {
    return (
        <Link to={to}>
            <button className={`btn-style ${className}`}>
                {text}
            </button>
        </Link>
    )
};

export default Button;