import React from 'react'

function User(props) {
    console.warn(props);
    let {Data} = props;
    return (
        <div>
            <h1>component 1</h1>
            <h3>{Data.Name}</h3>
            <h3>{Data.Age}</h3>
            <h3>{Data.profile}</h3>

            
        </div>
    )
}

export default User
