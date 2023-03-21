import { createContext, useEffect, useState } from "react"

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})
    useEffect(() => {
        setUsuario({
            name: "Adelson Diaz",
            registered: "3/20/2023"
        })
    }, [])
    

  return (
    <UserContext.Provider value={usuario}>
        {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider}