import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(false)
const AuthUpdateContext = createContext(null)

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const useAuthUpdateContext = () => {
  return useContext(AuthUpdateContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const toggleIsAuth = () => {
    setIsAuth((prevIsAuth) => !prevIsAuth)
  }

  return (
    <AuthContext.Provider value={isAuth}>
      <AuthUpdateContext.Provider value={toggleIsAuth}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  )
}
