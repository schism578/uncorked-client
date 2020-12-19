import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
    return (
        <div>
            <h2>Making memories, one glass at a time</h2>
            <p>Open something new. Record your memories. Revisit your favorites.</p>
            <Link
                to='/login'
                type='button'
                className='start-button'
            >
                Begin</Link>
        </div>
    )
}
