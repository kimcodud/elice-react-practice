import React, { useRef } from 'react';
import HomePage from './HomePage';
import UserListPage from './UserListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function ExRouting() {
    const userID = useRef('Elice');

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage userID={userID.current} />}
                />
                <Route
                    path="/userlist"
                    element={<UserListPage userID={userID.current} />}
                />
            </Routes>
        </BrowserRouter>
    );
}
