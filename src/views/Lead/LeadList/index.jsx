import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  NativeSelect,
  Paper,
  Select,
  Slide,
  TextField,
  Typography
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import GridOnTwoToneIcon from '@mui/icons-material/GridOnTwoTone';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';

//assets
import AddIcon from '@mui/icons-material/Add';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config';
import { Url } from 'Global';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

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

// custom style
const FormControlCustom = styled((props) => <FormControl {...props} />)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

// ==============================|| CUSTOMIZED TABLE ||============================== //

export default function LeadList() {
  const theme = useTheme();
  const companyid = JSON.parse(localStorage.getItem('id'));

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [staffdtls, staffdtlschange] = useState(null);
  const [cmplntdta, cmplntdtachange] = useState([]);
  const [name, namechange] = useState('');
  const [address, addresschange] = useState('');
  const [mobile, mobilechange] = useState('');
  const [leadThrough, leadThroughchange] = useState('');
  const [staffId, staffIdchange] = useState('');
  const [type, typechange] = useState('');
  const [leadCategory, leadCategorychnge] = useState('');
  const [openSide, setOpenSide] = React.useState(false);
  const [responce, setResponse] = React.useState([]);
  const [selectedValuestatus, setSelectedValuestatus] = useState(''); 
  const [leadid, setLeadid] = useState(''); 

  
  const handleClickOpendialog = () => {
    setOpenSide(true);
  };

  const handleClosedialog = () => {
    setOpenSide(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // setLoading(true);
    fetch(Url + companyid + '/lead_managment')
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
  }, [responce]);

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

    //Delete Lead API
    const handleDelete = (id) => () => {
      fetch(Url + companyid + '/lead/' + id , {
        method: "DELETE",
      })
      .then((response) => {
        if (response.ok) {
          toast.success(`Post with ID: ${id} has been deleted`);
          setResponse(id)
        } else {
          toast.failed("Failed to delete the post");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);      
      });
  };
  

  const [state, setState] = React.useState({
    age: '',
    name: 'hai'
  });

  //Lead Add API

  const handlesubmit = async (e) => {
    e.preventDefault();
    const leaddta = {
      name,
      address,
      mobile,
      leadThrough,
      staffId,
      type,
      leadCategory
    };
    try {
      const res = await axios.post(Url + companyid + '/lead' , leaddta);
      setResponse(res.data);
      handleClosedialog();
      if(res.data.success == true)
        {
          toast.success('Lead Created Succesfully');
        }    
      else {
        toast.error('Lead Error Please Correct And Add');
      }
     
    } catch (error) {
      console.error('There was an error making the request:', error);
    }
  };

  //Status Change API
    const fetchData = async  (event , lead) => {
      try {
        const response = await axios.get(Url + companyid + '/change_lead_status/' + lead + '/' + event.target.value); // Replace with your API
        setResponse(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };



  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const body = (
    <Box sx={modalStyle}>
      <Typography variant="h4">Re-Assign Staff</Typography>
      <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />
      <form style={{ display: 'flex', flexWrap: 'wrap' }}>
        <FormControl variant="standard" sx={{ m: theme.spacing(1), minWidth: 220 }}>
          <InputLabel id="demo-simple-select-outlined-label">Staff</InputLabel>
          <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined-1" label="Staff">
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
      <Button size="small" variant="contained" color="secondary" style={{ float: 'right' }}>
        ASSIGN
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

      <Breadcrumb title="Lead List">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Lead
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Lead List
        </Typography>
      </Breadcrumb>

      <Grid container wrap="nowrap" justifyContent="flex-end" sx={{ mb: 3 }} spacing={gridSpacing}>
        <Grid item>
          <Fab color="primary" aria-label="Add" size="small" onClick={handleClickOpendialog}>
            <AddIcon />
          </Fab>
          <Dialog
            open={openSide}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClosedialog}
            sx={{
              '& .MuiDialog-container': {
                justifyContent: 'flex-end',
                '& .MuiDialog-paper': {
                  m: 0,
                  borderRadius: 0,
                  maxWidth: 450,
                  maxHeight: '100%',
                  height: '100vh'
                }
              }
            }}
          >
            <DialogTitle>{'New Lead'}</DialogTitle>
            <DialogContent>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <TextField sx={{ mt: 1 }} fullWidth label="Name" variant="outlined" onChange={(e) => namechange(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="E-mail" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Phone Number" variant="outlined" onChange={(e) => mobilechange(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Address" variant="outlined" onChange={(e) => addresschange(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <TextField select label="Category" value={type} fullWidth variant="outlined" onChange={(e) => typechange(e.target.value)}>
                    <MenuItem value="Broadband">Broadband</MenuItem>
                    <MenuItem value="cable TV">Cable TV</MenuItem>
                    <MenuItem value="Combo">Combo</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Address" variant="outlined" onChange={(e) => addresschange(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth>
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
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline maxRows={4} label="Notes" variant="outlined" />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" onClick={handlesubmit} startIcon={<AddIcon />}>
                Add Lead
              </Button>
              <Button variant="text" onClick={handleClosedialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>

      <Card>
        <Divider />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="customized table" size="small">
            <TableHead>
              <TableRow sx={{ height: 40 }}>
                <StyledTableCell align="center" sx={{ width: '5px' }}>
                  Sl.No
                </StyledTableCell>
                <StyledTableCell align="left" sx={{ width: '140px' }}>Ticket No</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Address</StyledTableCell>
                <StyledTableCell align="left">Category</StyledTableCell>
                <StyledTableCell align="left">Staff</StyledTableCell>
                <StyledTableCell align="left">Date</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {cmplntdta.length === 0 && ( <TableRow> <TableCell colSpan={6}>no records found</TableCell> </TableRow>)}
              {cmplntdta &&
                cmplntdta.map((row, index) => (
                  <TableRow key={row.name} sx={{ height: 40 }}>
                    <StyledTableCell align="center" component="th" scope="row" sx={{ width: '5px' }}>
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.bookingNo}</StyledTableCell>
                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.address} &nbsp; {row.mobile}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.type}</StyledTableCell>
                    <StyledTableCell align="left">{row.staffName}</StyledTableCell>
                    <StyledTableCell align="left" sx={{ width: '200px' }}>
                      {row.createdOn}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <FormControlCustom>
                        <NativeSelect
                          sx={{ marginTop: theme.spacing(2) }}
                          defaultValue={row.status}                          
                          onChange={(event) => fetchData(event, row.id)}
                          inputProps={{ 'aria-label': 'age' }}
                        >
                          <option value="" disabled>
                            Placeholder
                          </option>
                          <option value="1">Pending</option>
                          <option value="2">Inprogress</option>
                          <option value="3">Completed</option>
                        </NativeSelect>
                      </FormControlCustom>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <div style={{ display: 'flex' }}>
                        <Button
                          onClick={handleDelete(row.id)}
                        >
                          <DeleteIcon></DeleteIcon>
                        </Button>
                      </div>
                    </StyledTableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        {body}
      </Modal>
    </>
  );
}
