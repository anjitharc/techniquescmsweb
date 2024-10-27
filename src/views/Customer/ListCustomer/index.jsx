import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Typography,
  TextField,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  FormControlLabel,
  Switch,
  Select,
  CardActions,
  Dialog,
  DialogContent,
  CardMedia,
  DialogActions,
  Alert,
  AlertTitle
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { styled, useTheme } from '@mui/material/styles';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import { Url } from 'Global';

// custom style
const FormControlCustom = styled((props) => <FormControl {...props} />)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120
}));

// ==============================|| FORM TEXTFIELD ||============================== //

const ListCustomer = () => {
  const theme = useTheme();
  const companyid = JSON.parse(localStorage.getItem('id'));

  const [type, setType] = useState(true);
  const [crfNumber, crfNumberchange] = useState('');
  const [address, addresschange] = useState('');
  const [phone, phonechange] = useState('');
  const [email, emailchange] = useState('');
  const [firstName, firstNamechange] = useState('');
  const [middleName, middleNamechange] = useState('');
  const [lastName, lastNamechnge] = useState('');
  const [gender, genderchnge] = useState('');
  const [userId, userIdchnge] = useState('');

  const handleSwitchChange = (event) => {
    setType(event.target.checked);
  };

  const [showAlert, setShowAlert] = useState(false);

  const [state, setState] = React.useState({
    age: '',
    name: 'hai'
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const handleClick = () => {
    Swal.fire({
      title: 'Success',
      text: 'Customer Created Successfully',
      icon: 'success',
      timer: 3000, // Auto-close after 3 seconds
      showConfirmButton: false, // No confirm button
      willClose: () => {
        console.log('Alert closed');
      }
    });
  };

  //Customer Create API
  const handlesubmit = (e) => {
    e.preventDefault();
    const custdta = {
      address,
      crfNumber,
      email,
      firstName,
      middleName,
      lastName,
      gender,
      phone,
      userId
    };
    fetch(Url + companyid + '/customer', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(custdta)
    })
      .then((res) => {
        handleClick();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Breadcrumb title="Customer List">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Customer
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Search Customer
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Personal Details
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="CRF Number"
                    variant="outlined"
                    size="small"
                    onChange={(e) => crfNumberchange(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    size="small"
                    label="Customer ID"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Customer Name"
                    size="small"
                    variant="outlined"
                    onChange={(e) => firstNamechange(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    size="small"
                    label="Nick Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    size="small"
                    label="Father Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel htmlFor="outlined-age-native-simple">SLA</InputLabel>
                    <Select
                      native
                      value={state.age}
                      onChange={handleChange}
                      label="SLA"
                      inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple'
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>PREMIUM</option>
                      <option value={20}>STANDARD</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    type="email"
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    label="E-Mail"
                    variant="outlined"
                    onChange={(e) => emailchange(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    size="small"
                    type="number"
                    fullWidth
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                    onChange={(e) => phonechange(e.target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="House Name"
                    size="small"
                    variant="outlined"
                    onChange={(e) => addresschange(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    size="small"
                    label="Pole Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel htmlFor="outlined-age-native-simple">AREA</InputLabel>
                    <Select
                      native
                      value={state.age}
                      onChange={handleChange}
                      label="AREA"
                     
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>PREMIUM</option>
                      <option value={20}>STANDARD</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel htmlFor="outlined-age-native-simple">SUB AREA</InputLabel>
                    <Select
                      native
                      value={state.age}
                      onChange={handleChange}
                      label="SUB AREA"
                      
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>PREMIUM</option>
                      <option value={20}>STANDARD</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel htmlFor="outlined-age-native-simple">DISTRICT</InputLabel>
                    <Select
                      native
                      value={state.age}
                      onChange={handleChange}
                      label="DISTRICT"
                      
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>KOZHIKODE</option>
                      <option value={20}>KANNUR</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Pincode"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <CardActions>
          <Grid container justifyContent="flex-end" spacing={gridSpacing}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handlesubmit}>
                Search
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Grid>
<Card>
        <TableContainer component={Paper} fullWidth>
                    <Table fullWidth>
                      <TableBody>
                        <TableRow>
                          <TableCell sx={{ width: '5px' }} variant="head">
                            Sl.No
                          </TableCell>
                          <TableCell variant="head">CRF Number</TableCell>
                          <TableCell variant="head">Customer ID</TableCell>
                          <TableCell variant="head">Name</TableCell>
                          <TableCell variant="head">Address</TableCell>
                          <TableCell variant="head">Mobile</TableCell>
                          <TableCell variant="head">E-Mail</TableCell>
                          <TableCell variant="head">Area</TableCell>
                          <TableCell variant="head">Sub Area</TableCell>
                          <TableCell variant="head">Pole Number</TableCell>
                        </TableRow>
                       
                          
                            {/* <TableRow  sx={{ height: 5, backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff' }}> */}
                            <TableRow>
                              <TableCell sx={{ width: '5px' }}></TableCell>
                              <TableCell sx={{ width: '200px' }}></TableCell>
                              <TableCell sx={{ width: '180px' }}>"</TableCell>
                              <TableCell sx={{ width: '180px' }}>""</TableCell>
                              <TableCell></TableCell>
                              <TableCell>"</TableCell>
                              <TableCell sx={{ width: '200px' }}>""</TableCell>
                              <TableCell sx={{ width: '200px' }}>""</TableCell>
                              <TableCell sx={{ width: '180px' }}>""</TableCell>
                              <TableCell sx={{ width: '180px' }}></TableCell>
                            </TableRow>
                         
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </Card>

    </>
  );
};

export default ListCustomer;
