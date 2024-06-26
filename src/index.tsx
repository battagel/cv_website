import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import reportWebVitals from './reportWebVitals'; */

import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Help from "./routes/help/help";
import Antonium from './routes/help/antonium';
import Dashboard from './routes/help/dashboard';

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/help",
        element: <Help />
    },
    {
        path: "/help",
        element: <Help />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
        ],
    },
    {
        path: "/help",
        element: <Help />,
        children: [
            {
                path: "antonium",
                element: <Antonium />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
