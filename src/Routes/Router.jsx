import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Resister from "../Authentication/Resister";
import Login from "../Authentication/Login";
import Coverage from "../Pages/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import PrivetRoute from "./PrivetRoute";
import Rider from "../Pages/Rider";
import SendParcel from "../Pages/SendParcel";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyParcels from "../Pages/DashBoard/MyParcels";




export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/rider',
            element:<PrivetRoute><Rider></Rider></PrivetRoute>
        },
        {
            path:'/send-parcel',
            element:<PrivetRoute><SendParcel></SendParcel></PrivetRoute>,
            loader:()=> fetch('/src/JsonFiles/serviceCenter.json').then(res=> res.json())
        },
        {
            path:'/coverage',
            Component:Coverage,
            loader:()=> fetch('/src/JsonFiles/serviceCenter.json').then(res=> res.json())
        },               
    ]
  },{
    path:'/',
    Component:AuthLayout ,
    children:[
        {
            path:'logIn',
            Component:Login
        },{
            path:'/resister',
            Component:Resister
        }
    ]
  },
  {
    path: 'dashboard',
    element:<PrivetRoute><DashBoardLayout></DashBoardLayout>   </PrivetRoute>,
    children:[
        {
            path:'my-parcels',
            Component:MyParcels
    }
]
  }
]);