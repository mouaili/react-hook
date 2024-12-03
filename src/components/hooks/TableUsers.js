import React from 'react';

function TableUsers({ users }) {
  console.log(users);

  return (
    <>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map(({ id, name, username, address, email }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>
                    {address.street}{' '}
                    <span className="text-danger">{address.suite}</span>{' '}
                    {address.city}
                  </td>
                  <td>{email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default TableUsers;
