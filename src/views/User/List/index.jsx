import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';
import { Typography, Grid, Chip, Box, Fab, Card, CardContent, Checkbox } from '@mui/material';
import MUIDataTable from 'mui-datatables';

// project import
import Breadcrumb from 'component/Breadcrumb';
import Avatar from 'component/Avatar';

// assets
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Avatar2 from 'assets/images/users/avatar-2.jpg';
import Avatar3 from 'assets/images/users/avatar-3.jpg';
import Avatar4 from 'assets/images/users/avatar-4.jpg';
import Avatar5 from 'assets/images/users/avatar-5.jpg';


//custom style
const UserListTable = styled((props) => <MUIDataTable {...props} />)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  '.MuiTable-root': {
    borderSpacing: '0 10px',
    borderCollapse: 'separate'
  },
  '.MuiTableRow-root': {
    background: theme.palette.background.paper,
    boxShadow: '0 2px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  '.MuiTableRow-root:hover': {
    background: theme.palette.primary.main + '!important',
    '.MuiTableCell-root': {
      color: '#fff'
    },
    '.MuiTableCell-head': {
      color: '#000'
    }
  }
}));

// ==============================|| LIST ||============================== //

const List = () => {

  const [userdata, userdatachange] = useState([]);

  useEffect(() => {
    // setLoading(true);
    fetch("https://api.cableman.app/TECHNIQUES/techniques/company/1/staff")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        userdatachange(resp.data.map(obj => Object.values(obj)));
        
        
      })
      .catch((err) => {
        console.log(err.message);
      });
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, []);




  const initialData = [     
            
    ['Gabby George', 'Support Lead', 'Edinburgh', 61, '2011/04/25', 'Active', Avatar3, 'GG@domain.com'], 
    [9, 'Abhilash', 'abhilash1985@gmail.com', '9961430002', 'abhilash', '123', 2, null, 1, 0]
    
  ];

 
  
  const [data] = useState(initialData);
  console.log(data);

  const columns = [
    {
      name: 'Name',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (            
          
            <Box sx={{ pr: 2 }}>
              <Grid key={rowIndex} container spacing={2} alignItems="center" sx={{ pr: 5 }}>
                <Grid item>
                  <Avatar alt="User 1" src={userdata[rowIndex][0]} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" variant="h6" color="inherit">
                    {userdata[rowIndex][1]}
                  </Typography>
                  <Typography align="left" variant="body2" color="inherit">
                    {userdata[rowIndex][2]}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          );
        }
      }
    },
    {
      name: 'Position',
      options: {
        filter: true
      }
    },
    {
      name: 'Office',
      options: {
        filter: true
      }
    },
    {
      name: 'Age',
      options: {
        filter: true
      }
    },
    {
      name: 'Start date',
      options: {
        filter: true
      }
    },
    {
      name: 'Status',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <Box
              component="span"
              m={1}
              sx={{
                position: 'relative',
                display: 'block',
                m: 0,
                '&:hover .MuiBox-root ': {
                  display: 'flex'
                }
              }}
            >
              {userdata[rowIndex][6] === '1' ? <Chip label="Primary" color="primary" /> : ''}
              {userdata[rowIndex][6] === '0' ? <Chip label="Disabled" color="secondary" /> : ''}
            </Box>
          );
        }
      }
    },
    {
      name: 'Action',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: () => {
          return (
            <Box
              component="span"
              m={1}
              sx={{
                position: 'relative',
                display: 'block',
                m: 0,
                '.MuiBox-root': {
                  display: 'flex'
                }
              }}
            >
              <Box component="span">
                <Fab variant="extended" size="small" color="primary" aria-label="add">
                  <DoneAllIcon />
                </Fab>
                <Fab variant="extended" size="small" color="secondary" aria-label="delete" sx={{ ml: 0.75 }}>
                  <DeleteOutlineIcon />
                </Fab>
              </Box>
            </Box>
          );
        }
      }
    }
  ];

  const CustomCheckbox = (props) => {
    let newProps = Object.assign({}, props);
    newProps.color = 'secondary';

    return <Checkbox {...newProps} />;
  };

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
    onChangeRowsPerPage: (numberOfRows) => console.log('numberOfRows: ', numberOfRows),
    onChangePage: (currentPage) => console.log('currentPage: ', currentPage)
  };

  return (
    <>
      <Breadcrumb title="User List">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          User
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          List
        </Typography>
      </Breadcrumb>
      <Card>
        <CardContent>
          <UserListTable data={data} columns={columns} options={options} components={{ Checkbox: CustomCheckbox }} />
        </CardContent>
      </Card>
    </>
  );


};


export default List;
