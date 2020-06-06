import React, {useState, useEffect} from 'react'

/* Pages */
import SignIn from "./pages/SignIn";

/* Utils */
import { AuthContext } from "./utils/context";

/* Routing */
import Routing from "./routes/Routing";

/* Auth */
import { isUserLogedApi } from "./api/auth";

const App = () => {

    const [user, setUser] = useState(null)
    const [loadUser, setLoadUser] = useState(false)
    const [refreshCheckLogin, setRefreshCheckLogin] = useState(false)

    useEffect(() => {
        setUser(isUserLogedApi())
        setLoadUser(true)
        setRefreshCheckLogin(false)
    }, [refreshCheckLogin])

    if (!loadUser) return null

    return(
        <AuthContext.Provider value={user}>
            { user ? (
                <Routing
                    setRefreshCheckLogin={setRefreshCheckLogin}
                />
            ) : (
                <SignIn
                    setRefreshCheckLogin={setRefreshCheckLogin}
                />
            )}
        </AuthContext.Provider>
    )
}

export default App