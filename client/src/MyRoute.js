import {BrowserRouter , Switch,Route} from "react-router-dom"
import App from "./App"
import FormCompoment from "./components/FormComponent"
import SingleComponent from "./components/SingleComponent"
import EditComponent from "./components/EditComponent"
import LoginComponent from "./components/LoginComponent"

const MyRoute=()=>{
    return(
        <BrowserRouter>
        <switch>
            <Route path="/" exact component={App}/>
            <Route path="/create" exact component={FormCompoment}/>
            <Route path="/blog/:slug" exact component={SingleComponent}/>
            <Route path="/blog/edit/:slug" exact component={EditComponent}/>
            <Route path="/login" exact component={LoginComponent}/>
        </switch>
        </BrowserRouter>
    )
}

export default MyRoute