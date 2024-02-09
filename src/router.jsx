import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import NotFound from "./pages/NotFound";
import Alrets from "./pages/Alrets";
import Trading from "./pages/Trading";
import Automation from "./pages/Automation";
import Traning from "./pages/Traning";
import Portfolio from "./pages/Portfolio";

const router = createBrowserRouter([
{    path:'/',
    element:<AppLayout/>,
    children:[
        {
            index:true ,element:<Alrets/>
        },
        {
            path:'/alert',element:<Alrets/>
        },
        {
            path:'/trading',element:<Trading/>
        },
        {
            path:'/automation',element:<Automation/>
        },
        {
            path:'/training',element:<Traning/>
        },
        {
            path:'/portfolio',element:<Portfolio/>
        }
    ]

}
, 

{ path: "*", element: <NotFound /> },
])

export default router;
