import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchUsers } from '../features/userSlice';
import { Table, TableHead, TableRow, TableCell, TableBody, TextField, Container } from '@mui/material';

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, status } = useSelector((state: RootState) => state.users);

  const [filter, setFilter] = useState({
    name: '',
    username: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  const filteredUsers = users.filter((user) => {
    const nameStartsWith = user.name.toLowerCase().startsWith(filter.name.toLowerCase());
    const usernameStartsWith = user.username.toLowerCase().startsWith(filter.username.toLowerCase());
    const phoneIncludes = user.phone.toLowerCase().includes(filter.phone.toLowerCase());
    const emailStartsWith = user.email.toLowerCase().startsWith(filter.email.toLowerCase());

    return nameStartsWith && usernameStartsWith && phoneIncludes && emailStartsWith;
  });

  return (
    <Container>
      <TextField
        label="Name"
        value={filter.name}
        onChange={(e) => setFilter({ ...filter, name: e.target.value })}
      />
      <TextField
        label="Username"
        value={filter.username}
        onChange={(e) => setFilter({ ...filter, username: e.target.value })}
      />
      <TextField
        label="Phone"
        value={filter.phone}
        onChange={(e) => setFilter({ ...filter, phone: e.target.value })}
      />
      <TextField
        label="Email"
        value={filter.email}
        onChange={(e) => setFilter({ ...filter, email: e.target.value })}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default UserTable;
