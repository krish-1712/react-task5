import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export default function BaseApp({ title, styles, children }) {
    const history = useNavigate();
    return (
        <div>
            <div>
                <div className="nav-styles">
                    <span>
                        <button
                            className="nav-buttons"
                            onClick={() => history("/add/user")}
                        > Add student</button>
                    </span>
                    <span>
                        <button
                            className="nav-buttons"
                            onClick={() => history("/teacher/user")}
                        > Add Teacher </button>
                    </span>
                    <span>
                        <button
                            className="nav-buttons"
                            onClick={() => history("/")}
                        > Student Details</button>
                    </span>
                    <span>
                        <button
                            className="nav-buttons"
                            onClick={() => history("/teacher")}
                        > Teacher Details</button>
                    </span>
                </div>
                <div className="title">{title}</div>
            </div>
            <div className="childred">
                    {children}
                <footer>
                    Contact us
                    <div>Email : Centre@gmail.com</div>
                    <div>Phone : 86*****743</div>
                </footer>
            </div>

        </div>
    )
} 