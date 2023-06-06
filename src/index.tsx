import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import reportWebVitals from './reportWebVitals'; */

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import Help from "./routes/help/Help";
import Antonium from './routes/help/Antonium';

const router = createBrowserRouter([
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
