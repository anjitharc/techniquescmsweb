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
  AlertTitle,
  MenuItem,
  FormHelperText,
  Box
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { styled, useTheme } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import { Url } from 'Global';
import axios from 'axios';

//Formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// custom style
const FormControlCustom = styled((props) => <FormControl {...props} />)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120
}));

// ==============================|| FORM TEXTFIELD ||============================== //

const CreateCustomer = () => {
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
  const [value, setValue] = useState('Broadband');

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Name is required'),
    // email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    area: Yup.string().required('Area is required'),
    // crfNumber: Yup.string().required('CRF Number is required'),
   subArea: Yup.string().required('Sub Area is required'),

     phone: Yup.string().required('Movile Number is required'),
    // customerId: Yup.string().required('Customer ID is required'),
    poleNo: Yup.string().required('Pole Number is required')
  });

  const handleType = (event) => {
    setValue(event.target.value);
  };

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

  const SwalSuccess = () => {
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

  const SwalError = () => {
    Swal.fire({
      title: 'Failure',
      text: 'Customer Not Created',
      icon: 'error',
      timer: 3000, // Auto-close after 3 seconds
      showConfirmButton: false, // No confirm button
      willClose: () => {
        console.log('Alert closed');
      }
    });
  };

  //Customer Create API
  const handlesubmit = async (values) => {
   
    const additionalData = {
      
    };

    // Combine form values and additional values
    const postData = {
      ...values,
      ...additionalData,
    };

    try {
      const res = await axios.post(Url + companyid + '/customer', postData);
console.log("sam",values);
      if (res.data.success == true) {
        SwalSuccess();
      } else {
        SwalError();
      }
    } catch (error) {
      console.error('There was an error making the request:', error);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        address: '',
        // email: '',
        area: '',
        crfNumber: '',
        customerId: '',
        // district: '',
         fatherName: '',       
         nickName: '',
         phone: '',
        // pincode: '',
        poleNo: '',
        // serviceLevel: '',
        subArea: '',
         userId: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handlesubmit(values);
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, isSubmitting, handleSubmit , handleBlur , handleChange, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          <Breadcrumb title="Create Customer">
            <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
              Home
            </Typography>
            <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
              Forms
            </Typography>
            <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
              Create Customer
            </Typography>
          </Breadcrumb>

          <Card style={{ marginBottom: '10px' }}>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Personal Details
                </Typography>
              }
            />
            <Divider />
            <Box sx={{ flexGrow: 1, padding: 2 }}>
            
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="Type" name="Type" value={value} onChange={handleType}>
                      <Grid container spacing={1}>
                        <Grid item>
                          <FormControlLabel value="Broadband" control={<Radio color="default" />} label="Broadband" />
                        </Grid>
                        <Grid item>
                          <FormControlLabel value="Digital TV" control={<Radio color="default" />} label="Digital TV" />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                </Grid>
              
                <Grid item xs={12} sm={6} md={3}>
                  <Field
                    fullWidth
                    id="outlined-basic"
                    label="CRF Number"
                    variant="outlined"
                    name="crfNumber"
                    as={TextField}
                    error={touched.crfNumber && Boolean(errors.crfNumber)}
                    helperText={touched.crfNumber && errors.crfNumber}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Field
                    fullWidth
                    id="outlined-basic"
                    label="Customer ID"
                    variant="outlined"
                    name="customerId"
                    as={TextField}
                    error={touched.customerId && Boolean(errors.customerId)}
                    helperText={touched.customerId && errors.customerId}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Field
                    fullWidth
                    id="outlined-basic"
                    label="Customer Name"
                    name="firstName"
                    as={TextField}
                    variant="outlined"
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField fullWidth id="outlined-basic" label="Nick Name" variant="outlined" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <TextField fullWidth id="outlined-basic" label="Father Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-age-native-simple">SLA</InputLabel>
                    <Select
                      native
                      value={state.age}
                      onChange={handleChange}
                      label="SLA"
                      
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>PREMIUM</option>
                      <option value={20}>STANDARD</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    type="email"
                    fullWidth
                    id="outlined-basic"
                    label="E-Mail"
                    variant="outlined"
                    onChange={(e) => emailchange(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Field
                    type="number"
                    fullWidth
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                    as={TextField}
                    name="phone"
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField type="date" fullWidth id="outlined-basic" label="DOB" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField fullWidth id="outlined-basic" label="Latitude" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField fullWidth id="outlined-basic" label="Longitude" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    label="User ID"
                    variant="outlined"
                    onChange={''}
                  />
                </Grid>
              </Grid>
            
            </Box>
          </Card>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Address Details
                  </Typography>
                }
              />
              <Divider />

              <CardContent>
                <Grid container spacing={1} rowSpacing={1} columnSpacing={1}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Field
                      fullWidth
                      id="outlined-basic"
                      type="text"
                      label="House Name"
                      variant="outlined"
                      name="address"
                      as={TextField}
                      error={touched.address && Boolean(errors.address)}
                      helperText={touched.address && errors.address}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Field
                      fullWidth
                      id="outlined-basic"
                      label="Pole Number"
                      variant="outlined"
                      name="poleNo"
                      as={TextField}
                      error={touched.poleNo && Boolean(errors.poleNo)}
                      helperText={touched.poleNo && errors.poleNo}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth variant="outlined" error={touched.area && Boolean(errors.area)}>
                      <InputLabel>Area</InputLabel>
                      <Select name="area" value={values.area} onChange={handleChange} onBlur={handleBlur} label="Area">
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="0">Balussery</MenuItem>
                        <MenuItem value="1">Nanminad</MenuItem>
                        <MenuItem value="2">Panay</MenuItem>
                      </Select>
                      {touched.area && errors.area ? <FormHelperText>{errors.area}</FormHelperText> : null}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth variant="outlined" error={touched.subArea && Boolean(errors.subArea)}>
                      <InputLabel>Area</InputLabel>
                      <Select name="subArea" value={values.subArea} onChange={handleChange} onBlur={handleBlur} label="Sub Area">
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="0">Balussery</MenuItem>
                        <MenuItem value="1">Nanminad</MenuItem>
                        <MenuItem value="2">Panay</MenuItem>
                      </Select>
                      {touched.area && errors.area ? <FormHelperText>{errors.area}</FormHelperText> : null}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth variant="outlined">
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
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField fullWidth id="outlined-basic" label="Pincode" variant="outlined" />
                  </Grid>
                </Grid>
                
              </CardContent>
            </Card>

            <CardActions>
              <Grid container justifyContent="flex-end" spacing={gridSpacing}>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                    Continue To Save
                  </Button>
                </Grid>
              </Grid>
              
            </CardActions>
          </Grid>          
        </Form>
      )}
    </Formik>
  );
};

export default CreateCustomer;
