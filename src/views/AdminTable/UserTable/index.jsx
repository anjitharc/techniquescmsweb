import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';
import {
  Typography,
  Grid,
  Chip,
  Box,
  Fab,
  Card,
  CardContent,
  Checkbox,
  CardActions,
  Modal,
  Divider,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from '@mui/material';
import MUIDataTable from 'mui-datatables';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Button,
  TablePagination
} from '@mui/material';
import { Edit, Delete, AccountCircle } from '@mui/icons-material';

// assets
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// project import
import Breadcrumb from 'component/Breadcrumb';

// project import
import { gridSpacing } from 'config.js';

import axios from 'axios';
import { Url } from 'Global';
import { useTheme } from '@mui/material/styles';
import toast, { Toaster } from 'react-hot-toast';

//formik-yup
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// ==============================|| LIST ||============================== //

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    position: 'absolute',
    width: 800,
    bgcolor: 'background.paper',
    padding: '24px'
  };
}

const UserList = () => {
  const theme = useTheme();
  const [modalStyle] = React.useState(getModalStyle);

  const companyId = JSON.parse(localStorage.getItem('id'));
  const [showPassword, setShowPassword] = useState(false);
  const [userdata, userdatachange] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [rolelist, setRolelist] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [response, setResponse] = useState([]);

  //User Create Credentials
  const [typeId, setTypeid] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUsername] = useState('');
  const [staffID, setStaffID] = useState('');
  const [userData, setUserData] = useState([]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Modal Create User
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
    RoleList();
  };

  const handleClose = () => {
    setShow(false);
  };

  //Modal Update User
  const [showuser, setShowuser] = useState(false);

  const handleOpenUpdate = (id) => {
    setShowuser(true);
    setStaffID(id);
    UserDatas(id);
  };

  const handleCloseUpdate = () => {
    setShowuser(false);
  };

  useEffect(() => {
    // Fetch users data
    axios
      .get(Url + companyId + '/staff')
      .then((response) => setUsers(response.data.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, [response]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = users.filter(
    (user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Role List
  const RoleList = () => {
    fetch(Url + companyId + '/role_list')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setRolelist(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //User Data
  const UserDatas = (id) => {
    fetch(Url + companyId + '/staffs/' + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setUserData(resp.data);
        setName(resp.data[0].name);
        setEmail(resp.data[0].email);
        setMobile(resp.data[0].mobile);
        setUsername(resp.data[0].userName);
        setPassword(resp.data[0].password);
        setTypeid(resp.data[0].typeId);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //Create User API
  const handleCreateUser = () => {
    const createuser = { companyId, email, mobile, name, password, typeId, userName };
    fetch(Url + companyId + '/staff', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(createuser)
    })
      .then((res) => {
        if (res.success == true) {
          toast.success('User Created Successfully');
          handleClose();
          setResponse(res);
        } else {
          toast.error('User Not Created');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //Update User API
  const handleUpdateUser = () => {
    const createuser = { companyId, email, mobile, name, password, typeId, userName };

    axios
      .put(Url + companyId + '/staff/' + staffID, createuser)
      .then((response) => {
        if (response.data.success == true) {
          toast.success('User Updated Successfully');
          handleCloseUpdate();
          setResponse(response.data);
        } else {
          toast.error('User Not Updated');
        }
      })
      .catch((error) => {
        console.error('There was an error updating the data!', error);
      });
  };

  //Create User Modal
  const body = (
    <Box sx={modalStyle}>
      <Typography variant="h4">User Creation</Typography>
      <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />

      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              sx={{ m: theme.spacing(1), width: '25ch' }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              size="small"
              sx={{ m: theme.spacing(1), width: '25ch' }}
              id="outlined-basic"
              label="E-Mail"
              variant="outlined"
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormControl variant="outlined" sx={{ m: theme.spacing(1), minWidth: 220 }}>
              <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined-1"
                label="Role"
                required
                size="small"
                onChange={(e) => setTypeid(e.target.value)}
              >
                {rolelist &&
                  rolelist.map((role) => {
                    return (
                      <MenuItem key={role.id} value={role.id}>
                        {role.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField size="small" sx={{ m: theme.spacing(1), width: '25ch' }} id="outlined-basic" label="Address" variant="outlined" />

            <TextField
              sx={{ m: theme.spacing(1) }}
              id="input-with-icon-textfield"
              variant="outlined"
              label="User Name"
              required
              type="email"
              size="small"
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              sx={{ m: theme.spacing(1), width: '25ch' }}
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              onChange={(e) => setMobile(e.target.value)}
              validate
            />

            <FormControl sx={{ m: theme.spacing(1), width: '25ch' }} variant="outlined" size="small">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />

        <Button size="small" variant="contained" color="secondary" style={{ float: 'right' }} onClick={handleCreateUser}>
          CREATE
        </Button>
      </form>
    </Box>
  );

  //Update User Modal
  const updateuser = (
    <Box sx={modalStyle}>
      <Typography variant="h4">User Creation</Typography>
      <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />

      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              sx={{ m: theme.spacing(1), width: '25ch' }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              size="small"
              sx={{ m: theme.spacing(1), width: '25ch' }}
              id="outlined-basic"
              label="E-Mail"
              value={email}
              variant="outlined"
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField size="small" sx={{ m: theme.spacing(1), width: '25ch' }} id="outlined-basic" label="Address" variant="outlined" />

            <TextField
              sx={{ m: theme.spacing(1) }}
              id="input-with-icon-textfield"
              variant="outlined"
              label="User Name"
              value={userName}
              required
              size="small"
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              sx={{ m: theme.spacing(1), width: '25ch' }}
              id="outlined-basic"
              value={mobile}
              label="Mobile Number"
              variant="outlined"
              onChange={(e) => setMobile(e.target.value)}
              validate
            />

            <FormControl sx={{ m: theme.spacing(1), width: '25ch' }} variant="outlined" size="small">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />

        <Button size="small" variant="contained" color="secondary" style={{ float: 'right' }} onClick={handleUpdateUser}>
          UPDATE
        </Button>
      </form>
    </Box>
  );

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            marginTop: '55px' // Custom margin
          }
        }}
      />

      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Card>
            <CardActions className="f-right">
              <Button variant="contained" size="small" color="primary" onClick={handleOpen}>
                Create User
              </Button>
            </CardActions>
            <CardContent className="p-0">
              <TextField
                label="Search Users"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ marginBottom: 2 }}
              />

              <TableContainer>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Mobile</TableCell>
                      <TableCell>User Name</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Password</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users &&
                      filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                        <TableRow key={user.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.mobile}</TableCell>
                          <TableCell>{user.userName}</TableCell>
                          <TableCell>
                            {user.typeId === 1 ? <Chip label="Admin" color="default" /> : ''}
                            {user.typeId === 2 ? <Chip label="Manager" color="default" /> : ''}
                            {user.typeId === 3 ? <Chip label="Staff" color="default" /> : ''}
                          </TableCell>
                          <TableCell>{user.password}</TableCell>
                          <TableCell>
                            {user.status === 1 ? <Chip label="Active" color="primary" /> : ''}
                            {user.status === 0 ? <Chip label="In-Active" color="secondary" /> : ''}
                          </TableCell>
                          <TableCell align="right">
                            <div style={{ display: 'flex' }}>
                              <IconButton color="primary" aria-label="Edit" size="large" onClick={() => handleOpenUpdate(user.id)}>
                                <EditOutlinedIcon />
                              </IconButton>
                              {/* <IconButton color="inherit" aria-label="Delete" size="large">
                                <DeleteOutlineOutlinedIcon />
                              </IconButton> */}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TablePagination
                component="div"
                count={filteredUsers.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Modal open={show} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        {body}
      </Modal>

      <Modal open={showuser} onClose={handleCloseUpdate} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        {updateuser}
      </Modal>
    </>
  );
};

export default UserList;
