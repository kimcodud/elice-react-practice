import React from 'react';
import { DATA } from './DATA';
import './UserListPage.css';
import { Link } from 'react-router-dom';

export default function UserListPage({ userID }) {
    return (
        <div className="userlistpage">
            <div className="userlistpage-header">User List</div>
            <div className="userlistpage-content">
                User ID:
                <span>{userID}</span>
                {DATA.map((item) => {
                    return (
                        <div
                            key={item.name}
                            className="userlistpage-content-user"
                        >
                            <div className="userlistpage-content-user-name">
                                {item.name}
                            </div>
                            <div className="userlistpage-content-user-addr">
                                {item.addr}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="userlistpage-footer">
                <Link to="/">Home page</Link>
            </div>
        </div>
    );
}
