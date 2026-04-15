import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Resister from "../Authentication/Resister";
import Login from "../Authentication/Login";
import Coverage from "../Pages/Coverage";
import AuthLayout from "../Layout/AuthLayout";




export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home
        },{
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
  }
]);