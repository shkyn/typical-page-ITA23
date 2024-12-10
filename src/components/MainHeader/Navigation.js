import "./Navigation.css"
import Button from "../UI/Button"

import AuthContext from "../../Store/auth-context"

const Navigation = () => {
    return (
        <AuthContext.Consumer>
            {(context) => {
                return(
                    <nav className="nav">
                        <ul>
                            <li>
                                <a href="/users">Users</a>
                            </li>
                            <li>
                                <a href="/admin">Admin</a>
                            </li>
                            {prependOnceListener.loggedIn && (
                                <li>
                                    <Button onClick={props.onLogout}>Logout</Button>
                                </li>
                            )}
                        </ul>
                    </nav>
                )
            }}
        </AuthContext.Consumer>
    )
}   

export default Navigation;