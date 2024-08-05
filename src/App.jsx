import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { User } from './context/Client/User.js'
import { useState } from "react"


function App() {
  const [user, setUser] = useState({name: "", email: "", surname: ""})
  
  
  return (
    <>
      <User.Provider value={{user, setUser}}>
        <RouterProvider router={router} />
      </User.Provider>
    </>
  )
}

export default App
