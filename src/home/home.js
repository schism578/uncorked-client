import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
    return (
        <div className='container'>
            <h2>making memories, one glass at a time</h2>
            <p>open something new. record your memories. revisit your favorites.</p>
            <Link
                to='/login'
                type='button'
                className='start-button'
            >
                begin</Link>
        </div>
    )
}
