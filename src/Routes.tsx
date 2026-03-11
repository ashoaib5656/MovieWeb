
import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Blog from "./components/Blog"
import Hero from "./components/Hero"
import MoviesList from "./components/MoviesList"
import MovieDetails from "./components/MovieDetails"
import Login from "./components/Login"
import QuestionContainer from "./components/QuestionContainer"

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
                path:"/discovery/:step",
                element:<QuestionContainer/>
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