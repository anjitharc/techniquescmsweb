import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import { Url } from 'Global';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import axios from 'axios';

const ComplaintCategory = () => {
  const [name, namechange] = useState('');
  const [description, decsriptionchange] = useState('');
  const [updatebtn, updatebtnshow] = useState(false);
  const [addbtn, addbtnshow] = useState(true);
  const [pageupdate, setpageupdate] = useState();
  const [updateid, setupdateid] = useState();

  const companyid = JSON.parse(localStorage.getItem('id'));

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const cmplntdta = { name, description };
    fetch(Url + companyid +'/complaint_category', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(cmplntdta)
    })
      .then((res) => {
    setpageupdate(res);
    namechange(null);
    decsriptionchange('');
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [cmpntctgry, cmplntctgryschange] = useState(null);
  useEffect(() => {
    fetch(Url + companyid + '/complaint_category')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        cmplntctgryschange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [pageupdate]);

  const removefntn = (id) => {
     
      fetch(Url + companyid + '/complaint_category/' + id, {
        method: 'DELETE'
      })
        .then((res) => {             
          setpageupdate(id);
        })
        .catch((err) => {
          console.log(err.message);
        });
    
  };

  const updatefntn = () => {  
    const cmplntdta = { name, description }; 

    axios.put(Url + companyid + '/complaint_category/' + updateid , cmplntdta)
      .then(response => {
        console.log("Data updated successfully:", response.data);
        setpageupdate(response.data);
      })
      .catch(error => {
        console.error("There was an error updating the data!", error);
      });
    
  };

  const editfnctn = async (id) => {
    addbtnshow(false);
    updatebtnshow(true);
    const response = await fetch(Url +companyid + '/complaint_category/' + id).then((response) => response.json());

    // update the state
    namechange(response.data[0].name);
    decsriptionchange(response.data[0].description);
    setupdateid(id);
  };

  return (
    <Card sx={{ paddingTop: 5 }}>
      <Grid container rowSpacing="15px" alignItems="center" spacing={3} paddingLeft={3} paddingBottom={3}>
        <Grid item xs={12}>
        <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            color="primary"
          />
        }
        label={checked ? "DIGITAL TV" : "BROADBAND"}
      />
        </Grid>
        {checked && (
          <>
        <Grid item xs={3}>
          <TextField fullWidth id="outlined-basic" value={name} label="Complaint" variant="outlined" onChange={(e) => namechange(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => decsriptionchange(e.target.value)}
          />
        </Grid>
        
        {/* <Grid item xs={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
            <Select native label="Type">
              <option aria-label="None" value="" />
              <option value={10}>Cable TV</option>
              <option value={20}>Broadband</option>
            </Select>
          </FormControl>
        </Grid> */}

        <Grid item xs={3}>
          {' '}
          {addbtn && <AddCircleTwoToneIcon color="primary" type="button" onClick={handlesubmit} sx={{ fontSize: 30 }} />}
          {updatebtn && (
            <Button className="btn btn-primary" onClick={updatefntn}>
              UPDATE
            </Button>
          )}      
      </Grid>
      </>
)}
      {!checked && (
          <>
        <Grid item xs={3}>
          <TextField fullWidth id="outlined-basic" value={name} label="Complaint" variant="outlined" onChange={(e) => namechange(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => decsriptionchange(e.target.value)}
          />
        </Grid>    
        

        <Grid item xs={3}>
          {' '}
          {addbtn && <AddCircleTwoToneIcon color="primary" type="button" onClick={handlesubmit} sx={{ fontSize: 30 }} />}
          {updatebtn && (
            <Button className="btn btn-primary" onClick={updatefntn}>
              UPDATE
            </Button>
          )}
        </Grid>
        </> )}

      {checked && (
      <TableContainer sx={{paddingTop: 5}}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Sl.No</b>
              </TableCell>
              <TableCell align="left">
                <b>DIGITAL TV COMPLAINT</b>
              </TableCell>
              <TableCell align="left">
                <b>DESCRIPTION</b>
              </TableCell>
             
              <TableCell align="left">
                <b>ACTION</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {cmpntctgry &&
              cmpntctgry.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <center> {index + 1}</center>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  
                  <TableCell align="center">
                    <Grid container spacing={2}>
                      <Grid item>
                        <EditOutlinedIcon
                          size={20}
                          type="button"
                          onClick={() => {
                            editfnctn(row.id);
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <RemoveCircleOutlineOutlinedIcon
                          type="button"
                          color="red"
                          size={20}
                          onClick={() => {
                            removefntn(row.id);
                          }}
                        />
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      
            )}


            {/* Broadband Complaint */}

            {!checked && (
      <TableContainer sx={{paddingTop: 5}}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Sl.No</b>
              </TableCell>
              <TableCell align="left">
                <b>BROADBAND COMPLAINT</b>
              </TableCell>
              <TableCell align="left">
                <b>DESCRIPTION</b>
              </TableCell>
             
              <TableCell align="left">
                <b>ACTION</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {cmpntctgry &&
              cmpntctgry.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <center> {index + 1}</center>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  
                  <TableCell align="center">
                    <Grid container spacing={2}>
                      <Grid item>
                        <EditOutlinedIcon
                          size={20}
                          type="button"
                          onClick={() => {
                            editfnctn(row.id);
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <RemoveCircleOutlineOutlinedIcon
                          type="button"
                          color="red"
                          size={20}
                          onClick={() => {
                            removefntn(row.id);
                          }}
                        />
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      
            )}
            </Grid>
    </Card>
  );
};

export default ComplaintCategory;
