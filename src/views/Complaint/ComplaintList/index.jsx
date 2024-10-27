import React, { useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardHeader, Divider, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { AdminUrl, Url } from 'Global';
import toast, { Toaster } from 'react-hot-toast';

// custom style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

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
    width: 300,
    bgcolor: 'background.paper',
    padding: '24px'
  };
}

// ==============================|| CUSTOMIZED TABLE ||============================== //

export default function ComplaintList() {
  //datas corner

  const companyid = JSON.parse(localStorage.getItem('id'));

  const theme = useTheme();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [staffdtls, staffdtlschange] = useState(null);
  const [cmplntdta, cmplntdtachange] = useState([]);
  const [statusup, statusupchange] = useState(null);
  const [complaintId, complaintIdchange] = useState('');
  const [complaintReason, complaintReasonchange] = useState('');
  const [closedStaffId, staffIdchange] = useState();
  const [assignedStaffId, setstaffid] = useState(null);
  const [staffId, setassignedStaffId] = useState(null);

  //Modal Complaint Close
  const [show, setShow] = useState(false);

  const handleCloseCmp = () => setShow(false);
  const handleShowCmp = (Complaintid) => (e) => {
    setShow(true);
    complaintIdchange(Complaintid);
  };

  const handleOpen = (id, staffid) => (e) => {
    setOpen(true);
    complaintIdchange(id);
    setassignedStaffId(staffid);
  };

  const handleClose = () => {
    setOpen(false);
  };


  //Complaint List Api
  const FetchCmplnt = () => {
 // setLoading(true);
 fetch(Url + companyid +'/complaint')
 .then((res) => {
   return res.json();
 })
 .then((resp) => {
   cmplntdtachange(resp.data);
 })
 .catch((err) => {
   console.log(err.message);
 });
//   .finally(() => {
//     setLoading(false);
//   });
  }

// Load Complaint List At Every 1 min
  useEffect(() => {

    const interval = setInterval(FetchCmplnt, 60000); // Poll API every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount

  }, []);

  // Load Complaint List On Page Loads
  useEffect(() => {
    FetchCmplnt();
  }, [statusup]);

  //staff API
  useEffect(() => {
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
  }, []);

  //Closing Complaint Api

  const handlecmpclose = () => (e) => {
    e.preventDefault();
    const cmpdta = {
      complaintReason,
      complaintId,
      closedStaffId
    };
    fetch(Url + companyid + '/complaint_close', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(cmpdta)
    })
      .then((res) => {
        toast.success('Complaint Closed Successfully');
        setShow(false);
        statusupchange(complaintId + 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Re-Assign Modal API

  const handleReassign = (e) => {
    const custdta = {
      assignedStaffId,
      complaintId,
      staffId
    };
    fetch(AdminUrl + '/complaint_reassign', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(custdta)
    })
      .then((res) => {
        handleClose();
        statusupchange(complaintId + 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //Re-Assign Modal

  const body = (
    <Box sx={modalStyle}>
      <Typography variant="h4">Re-Assign Staff</Typography>
      <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />
      <form style={{ display: 'flex', flexWrap: 'wrap' }}>
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
      </form>
      <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />
      <Button size="small" variant="contained" color="secondary" style={{ float: 'right' }} onClick={handleReassign}>
        ASSIGN
      </Button>
    </Box>
  );

  //Complaint Close Modal

  const bodyclosecmp = (
    <Box sx={modalStyle}>
      <Typography variant="h4">Complaint Close</Typography>
      <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />
      <form style={{ display: 'flex', flexWrap: 'wrap' }}>
        <FormControl variant="standard" sx={{ m: theme.spacing(1), minWidth: 220 }}>
          <TextField
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined-1"
            label="Reason"
            onChange={(e) => complaintReasonchange(e.target.value)}
          ></TextField>
        </FormControl>

        <FormControl variant="standard" sx={{ m: theme.spacing(1), minWidth: 220 }}>
          <InputLabel id="demo-simple-select-outlined-label">Staff</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined-1"
            label="Staff"
            onChange={(e) => staffIdchange(e.target.value)}
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
      </form>
      <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />
      <Button size="small" variant="contained" color="secondary" style={{ float: 'right' }} onClick={handlecmpclose()}>
        SUBMIT
      </Button>
    </Box>
  );

  return (
    <>
      <Breadcrumb title="Complaint List">
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              marginTop: '55px' // Custom margin
            }
          }}
        />
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Complaint
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Complaint List
        </Typography>
      </Breadcrumb>
      <Card>
        <CardHeader
          title={
            <Typography component="div" className="card-header">
              Complaint List
            </Typography>
          }
        />
        <Divider />
        <TableContainer>
          <Table sx={{ minWidth: 100 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Sl.No</StyledTableCell>
                <StyledTableCell align="left">Ticket No</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Address</StyledTableCell>
                <StyledTableCell align="left">Category</StyledTableCell>
                <StyledTableCell align="left">Staff</StyledTableCell>
                <StyledTableCell align="right">Time</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>          
             
            
            <TableBody>
            {cmplntdta.length === 0 && ( <TableRow> <TableCell colSpan={6}>no records found</TableCell> </TableRow>)}

              {cmplntdta &&
                cmplntdta.map((row, index) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.ticket}</StyledTableCell>
                    <StyledTableCell align="left">{row.customer}</StyledTableCell>
                    <StyledTableCell align="left">{row.address}</StyledTableCell>
                    <StyledTableCell align="left">{row.category}</StyledTableCell>
                    <StyledTableCell align="left">{row.assignedStaffName}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    <StyledTableCell align="left">
                      <div style={{ display: 'flex' }}>
                        <Button size="small" variant="contained" color="secondary" onClick={handleShowCmp(row.id)}>
                          CLOSE
                        </Button>
                        &nbsp;
                        <Button size="small" variant="contained" color="secondary" onClick={handleOpen(row.id, row.assignedStaffId)}>
                          ASSIGN
                        </Button>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        {body}
      </Modal>

      <Modal open={show} onClose={handleCloseCmp} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        {bodyclosecmp}
      </Modal>
    </>
  );
}
