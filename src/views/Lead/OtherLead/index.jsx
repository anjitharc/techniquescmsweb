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
  Pagination,
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

export default function ClosedLead() {
  const theme = useTheme();
  const companyid = JSON.parse(localStorage.getItem('id'));

  const [cmplntdta, cmplntdtachange] = useState([]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page
  const totalItems = 100; // Total number of items to paginate through

  useEffect(() => {
    // setLoading(true);
    fetch(Url + companyid + '/closed_leads')
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
  }, []);

  // Calculate total pages based on items per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Breadcrumb title="Closed Lead List">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Lead
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Closed Leads
        </Typography>
      </Breadcrumb>
     
    
      <Card>
        <Divider />
        <TableContainer>
          <Table sx={{ minWidth: 100 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" sx={{ width: '5px' }}>
                  Sl.No
                </StyledTableCell>
                <StyledTableCell align="left">Ticket No</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Address</StyledTableCell>
                <StyledTableCell align="left">Mobile</StyledTableCell>
                <StyledTableCell align="left">Reg Date</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cmplntdta.length === 0 && (
                <TableRow>
                  {' '}
                  <TableCell colSpan={6}>no records found</TableCell>{' '}
                </TableRow>
              )}
              {cmplntdta &&
                cmplntdta.map((row, index) => (
                  <StyledTableRow key={row.name} sx={{ height: 1 }}>
                    <StyledTableCell align="center" component="th" scope="row" sx={{ width: '5px' }}>
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.bookingNo}</StyledTableCell>
                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell align="left">{row.address}</StyledTableCell>
                    <StyledTableCell align="left"> {row.mobile}</StyledTableCell>
                    <StyledTableCell align="left" sx={{ width: '200px' }}>
                      {row.createdOn}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Box 
      display="flex" 
      justifyContent="center" // Centers the pagination horizontally
      alignItems="center" // Centers the pagination vertically if needed
      mt={2} // Adds some margin at the top for spacing
    >
      <Pagination color="primary" shape="rounded" count={totalPages} size="large" page={page} onChange={handleChange} />
      </Box>
    </>
  );
}
