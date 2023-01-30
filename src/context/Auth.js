// import { createContext, useState } from 'react';
// import { api } from '../services/Api'

// export const AuthContext = createContext()

// export const AuthProvider = ({clidren}) => {
//   const [user, setUser] = useState(null);

//   const signIn = async ({ email, password }) => {
//     const response = await api.post('/auth', {
//       email,
//       password
//     })

//     if(response.data.error) {
//       alert(response.data.error)
//     } else {
//       setUser(response.data)
//       localStorage.setItem("@Auth:token", response.data.token)
//       localStorage.setItem("@Auth:user", response.data.user)
//     }

//   }

//   return <AuthContext.Provider value={{
//     user,
//     signed: !!user,
//     signIn
//   }}>{clidren}</AuthContext.Provider>
// }
