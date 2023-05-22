import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
    return (
        <div className="notfoundpage">
            <div className="notfoundpage-header">NotFoundPage</div>
            <div className="notfoundpage-content">
                <div>404 Not Found</div>
                <div>Please check your URL</div>
            </div>
            <div className="notfoundpage-footer">
                {/* HomePage로 돌아갈 수 있도록 코드를 추가해주세요. */}
                <Link to="/">Home</Link>
            </div>
        </div>
    );
}
