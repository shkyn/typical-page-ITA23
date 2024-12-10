import "./Navigation.css"

const Navigation = () => {
    return (
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
}

export default Navigation;