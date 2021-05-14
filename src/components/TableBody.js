function TableBody({users}) {
    console.log(users)
    
    return (
        <tbody>
           {users[0] !== undefined && users[0].name !== undefined ? (
               users.map(({picture, phone, email, name, location, login}) => {
                return (
                    <tr key={login.uuid}>
                        <td><img src={picture.thumbnail} /></td>
                        <td>{name.first + " " + name.last}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>{location.city + ", " + location.state}</td>
                    </tr>
                )
               })
           ) : (
               <></>
           )}
        </tbody>
    )
}

export default TableBody;

// email
// name.first name.last
// phone
// picture.thumbnail
// location.city + location.state
// Key= login.uuid