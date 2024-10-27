import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalClose from '@mui/joy/ModalClose';

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
  TableBody,
  TableRow,
  TableCell,
  Paper,
  FormControlLabel,
  Switch,
  Box,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment
} from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//JOY
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import CmplntFetch from './CmplntFetch';
import { Url } from 'Global';
import toast, { Toaster } from 'react-hot-toast';
import { AccountCircle } from '@mui/icons-material';

// ==============================|| FORM TEXTFIELD ||============================== //

const CreateComplaint = () => {
  const theme = useTheme();
  const companyid = JSON.parse(localStorage.getItem('id'));

  const [modalStyle] = React.useState(getModalStyle);
  const [type, setType] = useState(true);

  //Data
  const [crfNumber, setCrfnumber] = useState(null);
  const [cusdta, cusdtachange] = useState('');
  const [complainthistory, complainthistorychange] = useState('');
  const [custid, setcustid] = useState('');
  const [staffdtls, staffdtlschange] = useState(null);
  const [assignedStaffId, setstaffid] = useState(null);
  const [priority, setPriority] = useState(null);
  const [categoryId, setComplaintcategory] = useState(null);
  const [phone, phonechange] = useState('');
  const [complaint, setDescription] = useState('No Remarks');
  const [customer, setCustomerId] = useState('');

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
      width: 500,
      bgcolor: 'background.paper',
      padding: '24px'
    };
  }

  const handleSwitchChange = (event) => {
    setType(event.target.checked);
  };

  // Search Modal
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  // Complaint Create Modal
  const [showcreate, setShowcreate] = useState(false);

  const handleOpencreate = () => {
    setShowcreate(true);
    StaffList();
    CmplntCtgryList();
  };

  const handleClosecreate = () => {
    setShowcreate(false);
  };

  const handleChildData = (data, cusid) => {
    setCrfnumber(data);
    setcustid(cusid);
    setCustomerId(cusid);
  };

  // const handleCreateComplaint = () => {
  //   toast.success('Complaint Generated Successfully');

  //   handleClosecreate();
  //   cusdtachange(null);
  // };

  // Fetchning Data API
  const fetchbtn = () => {
    fetch(Url + companyid + '/complaints_history/' + crfNumber)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        cusdtachange(resp.data);
        complainthistorychange(resp.data.complaintListVOs);
        setCustomerId(resp.data.id);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //staff API
  const StaffList = () => {
    fetch(Url + companyid + '/staff')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        staffdtlschange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //Complaint Catogory API
  const [cmplntctgry, cmplntctgrychange] = useState(null);
  const CmplntCtgryList = () => {
    fetch(Url + companyid + '/complaint_category')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        cmplntctgrychange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //Complaint Creation API
  const handleCreateComplaint = () => {
    const cmplntdta = { categoryId, customer, phone, complaint, assignedStaffId };
    fetch(Url + companyid + '/complaint', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(cmplntdta)
    })
      .then((res) => {
        toast.success('Complaint Generated Successfully');
        handleClosecreate();
        cusdtachange(null);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const body = (
    <Box sx={modalStyle}>
      <Typography variant="h4">Register Complaint</Typography>
      <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />
      <form style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Grid container spacing={2}>
          <Grid item xs={2} sm={6}>
            <FormControl variant="standard" sx={{ m: theme.spacing(1), minWidth: 220 }}>
              <InputLabel id="demo-simple-select-outlined-label">Complaint Category</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined-1"
                label="Complaint Category"
                onChange={(e) => setComplaintcategory(e.target.value)}
              >
                {cmplntctgry &&
                  cmplntctgry.map((cmplnt) => {
                    return (
                      <MenuItem key={cmplnt.id} value={cmplnt.id}>
                        {cmplnt.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: theme.spacing(1), minWidth: 220 }}>
              <InputLabel id="demo-simple-select-outlined-label">Staff</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined-1"
                label="Staff"
                onChange={(e) => setstaffid(e.target.value)}
              >
                {staffdtls &&
                  staffdtls.map((staffs) => {
                    return (
                      <MenuItem key={staffs.id} value={staffs.id}>
                        {staffs.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2} sm={6}>
            <FormControl variant="standard" sx={{ m: theme.spacing(1), minWidth: 220 }}>
              <InputLabel id="demo-simple-select-outlined-label">Priority</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined-1"
                label="Priority"
                onChange={(e) => setPriority(e.target.value)}
              >
                <MenuItem value="1">High</MenuItem>
                <MenuItem value="2">Medium</MenuItem>
                <MenuItem value="3">Normal</MenuItem>
                <MenuItem value="4">Low</MenuItem>
              </Select>
            </FormControl>
            <Grid item sx={2}>
              <TextField
                size="small"
                sx={{ m: theme.spacing(1), width: '25ch' }}
                id="outlined-basic"
                label="Mobile Number"
                variant="standard"
                onChange={(e) => phonechange(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item sx={2} sm={6}>
            <TextField
              size="small"
              sx={{ m: theme.spacing(1), width: '25ch' }}
              id="outlined-basic"
              label="Description"
              variant="standard"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
        </Grid>
      </form>
      <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />
      <Button size="small" variant="contained" color="secondary" style={{ float: 'right' }} onClick={handleCreateComplaint}>
        CREATE
      </Button>
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
      <Breadcrumb title="Create Complaint">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Forms
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Create Complaint
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Search Customer
                </Typography>
              }
            />
            <Divider />

            <CardContent>
              <Grid item>
                <FormControlLabel
                  control={<Switch color="primary" defaultChecked />}
                  onChange={handleSwitchChange}
                  label={type ? 'Cable TV' : 'Broadband'}
                />
              </Grid>
              {type && (
                <form noValidate autoComplete="off">
                  <TextField
                    sx={{ m: theme.spacing(1) }}
                    id="input-with-icon-textfield"
                    variant="outlined"
                    size="small"
                    value={crfNumber}
                    onChange={(e) => setCrfnumber(e.target.value)}
                    onDoubleClick={handleOpen}
                    helperText="Enter CRF Number / Mobile / ID for search"
                    label="Search "
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      )
                    }}
                  />

                  <Button sx={{ m: theme.spacing(1), width: '15ch', height: '4ch' }} variant="outlined" onClick={fetchbtn}>
                    {' '}
                    FETCH{' '}
                  </Button>
                  <Button sx={{ m: theme.spacing(1), width: '20ch', height: '4ch' }} variant="outlined" onClick={handleOpencreate}>
                    {' '}
                    CREATE COMPLAINT{' '}
                  </Button>
                </form>
              )}

              {!type && (
                <form noValidate autoComplete="off">
                  <TextField
                    sx={{ m: theme.spacing(1) ,  cursor: 'pointer' }}
                    id="input-with-icon-textfield"
                    variant="outlined"
                    size="small"
                    value=""
                    onChange=""
                    onDoubleClick={handleOpen}
                    helperText="Enter CRF Number / Mobile / UserID for search"
                    label="Broadband Search "
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                     
                    }}
                  />
                  <Button sx={{ m: theme.spacing(1), width: '15ch', height: '4ch' }} variant="outlined">
                    {' '}
                    FETCH{' '}
                  </Button>
                  <Button sx={{ m: theme.spacing(1), width: '20ch', height: '4ch' }} variant="outlined">
                    {' '}
                    CREATE COMPLAINT{' '}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          &nbsp;
          {cusdta && (
            <Card>
              <CardContent>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Customer Details</Typography>
                  <Divider />
                  <TableContainer component={Paper}>
                    <Table sx={{ '& td': { borderBottom: 'none' }, minWidth: 350 }}>
                      <TableBody>
                    <TableCell>
                    <TableRow>
                            <b>Name</b>
                          </TableRow>
                          <TableRow>
                            <b>Mobile</b>
                          </TableRow>
                          <TableRow>
                            <b>Area</b>
                          </TableRow>
                        </TableCell>
                        <TableCell>
                          <TableRow>:</TableRow>
                          <TableRow>:</TableRow>
                          <TableRow>:</TableRow>
                        </TableCell>
                        {/* {rows.map((row) => ( */}
                        <TableCell key={''}>
                          <TableRow>
                            {cusdta.firstName} {cusdta.middleName} {cusdta.lastName}
                          </TableRow>
                          <TableRow>{cusdta.phone}</TableRow>
                          <TableRow>Area</TableRow>
                        </TableCell>
                        {/* ))} */}
                        <TableCell>
                          <TableRow>
                            <b>Address</b>
                          </TableRow>
                          <TableRow>
                            <b>Sub Area</b>
                          </TableRow>
                          <TableRow>
                            <b>Pole Number</b>
                          </TableRow>
                        </TableCell>
                        <TableCell>
                          <TableRow>:</TableRow>
                          <TableRow>:</TableRow>
                          <TableRow>:</TableRow>
                        </TableCell>
                        {/* {rows.map((row) => ( */}
                        <TableCell key={''}>
                          <TableRow>{cusdta.address}</TableRow>
                          <TableRow>Sub area</TableRow>
                          <TableRow>Area</TableRow>
                        </TableCell>
                        {/* ))} */}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </CardContent>
            </Card>
          )}
          &nbsp;
          {cusdta && (
            <Card>
              <CardContent>
                <Typography variant="subtitle1">Complaint History</Typography>
                <Divider />
                
                  <Table aria-label="striped table" stripe="odd"  sx={{"--TableCell-height": "4px"}}>
                  <thead>
                  <tr>
                          Sl.No
                       </tr>
                        <tr>Booked Date / Time</tr>
                        
                        <tr>Category</tr>
                        <tr>Complaint</tr>
                        <tr>Assigned Staff</tr>
                        <tr>Closed Date / Time</tr>
                        
                        <tr>Closed Staff</tr>
                      </thead>
                   <tbody>
                      {complainthistory &&
                        complainthistory.map((row, index) => (
                          <tr key={index} sx={{ height: 5, backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff' }}>
                            <td sx={{ width: '5px' }}>{index + 1}</td>
                            <td sx={{ width: '250px' }}>{row.bookedDate} / {row.bookedTime}</td>
                            
                            <td sx={{ width: '180px' }}>{row.categoryName}</td>
                            <td>{row.complaintReason}</td>
                            <td>{row.assignedStaffName}</td>
                            <td sx={{ width: '250px' }}>{row.closedDate} / {row.closedTime}</td>
                           
                            <td sx={{ width: '180px' }}>{row.closedStaffName}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
               
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>

      <Modal open={showcreate} onClose={handleClosecreate} >
        
        {body}
       
      </Modal>

      <Dialog
        open={show}
        onClose={handleClose}
        fullWidth
        maxWidth="lg" // You can change this to 'xs', 'sm', 'md', 'lg', 'xl' depending on the width you want
      >
     
        <DialogTitle>Search Customer</DialogTitle>
        <DialogContent>
          <CmplntFetch onClose={handleClose} onSendData={handleChildData} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateComplaint;
