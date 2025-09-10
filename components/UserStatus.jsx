const UserStatus = (props) => {

if(props.loggedIn && props.isAdmin){
    return <p>Welcome Admin</p>
}

if(loggedIn && !isAdmin){
    return <p>Welcome User</p>
}

}

export default UserStatus
