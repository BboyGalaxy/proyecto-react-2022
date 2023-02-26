import { Outlet } from "react-router-dom"
import Menu from "../menu/menu"


const App = () => {

    return(
        <>
            <Menu />
            <Outlet />
        </>
        
    )
}

export default App