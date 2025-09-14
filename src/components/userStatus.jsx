import React from 'react'

const userStatus = ({loggedIn, isAdmin}) => {
    // const loggedIn = true
    // const isAdmin = false

    if(loggedIn && isAdmin) {
        return <p>welcome Admin</p>
    } else  return <p>welcome User</p>

}

export default userStatus
