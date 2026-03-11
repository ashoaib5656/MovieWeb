

import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Blog from "./components/Blog"
import Hero from "./components/Hero"
import MoviesList from "./components/MoviesList"
import MovieDetails from "./components/MovieDetails"
import Question1 from "./components/Question1"
import Question2 from "./components/Question2"
import Question3 from "./components/Question3"
import Question4 from "./components/Question4"
import Question5 from "./components/Question5"
import Question6 from "./components/Question6"
import Login from "./components/Login"

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,

        children:[
            
            {
                path:"/",
                element:<Hero/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/movies",
                element:<MovieDetails/>
            },
            {
                path:"/movies/:text",
                element:<MoviesList/>
            },
            {
                path:"/question1",
                element:<Question1/>
            },
            {
                path:"/question2",
                element:<Question2/>
            },
            {
                path:"/question3",
                element:<Question3/>
            },
            {
                path:"/question4",
                element:<Question4/>
            },
            {
                path:"/question5",
                element:<Question5/>
            },
            {
                path:"/question6",
                element:<Question6/>
            },
            {
                path:"/blog",
                element:<Blog/>
            }
            
        ]
    },
    {
        path:"*",
        element:<div>Error</div>
    }
])

export default Routes