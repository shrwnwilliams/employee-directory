import React from 'react';
import TableBody from "./TableBody"

function Table({ users }) {
    // console.log(users)
    return (
        <div className="datatable">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <TableBody users={users}/>
            </table>
        </div>
    )
}


export default Table;