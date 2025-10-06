"use client";

import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const savedUsers = localStorage.getItem("users");
        if (savedUsers && savedUsers !== "undefined") {
            setUsers(JSON.parse(savedUsers));
        }

        const currentUser = localStorage.getItem("currentUser");
        if (currentUser && currentUser !== "undefined") {
            setLoggedInUser(JSON.parse(currentUser));
        }

        const loggedIn = localStorage.getItem("isLoggedIn");
        if (loggedIn && loggedIn !== "undefined") {
            setIsLoggedIn(JSON.parse(loggedIn));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users || []));
        localStorage.setItem("currentUser", JSON.stringify(loggedInUser ?? null));
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn ?? false));
    }, [users, loggedInUser, isLoggedIn]);


    useEffect(() => {
        if (loggedInUser) {
            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.id === loggedInUser.id ? loggedInUser : user
                )
            );
        }
    }, [loggedInUser]);

    function logout() {
        setLoggedInUser(null);
        setIsLoggedIn(false);
    };


    return (
        <UsersContext.Provider value={{ users, setUsers, loggedInUser, setLoggedInUser, isLoggedIn, setIsLoggedIn, logout }}>
            {children}
        </UsersContext.Provider>
    );
}