import { Box, Card, FormControl, Grid, IconButton, InputLabel, List, ListItem, ListItemText, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { Url } from 'Global';

const Area = () => {

  const [name, namechange] = useState('');
  const [pageupdate, setpageupdate] = useState();
  const [area, setareachange] = useState();
  const [subarea, setsubareachange] = useState();
  const companyid = JSON.parse(localStorage.getItem('id'));

  const handlesubmit = (e) => {
    e.preventDefault();
    const cmplntdta = { name };
    fetch(Url + companyid +'/area', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(cmplntdta)
    })
      .then((res) => {
    setpageupdate(res);
    namechange('');
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //Area Data

  useEffect(() => {
    fetch(Url + companyid + '/area')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setareachange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [pageupdate]);

  //Area Data

  useEffect(() => {
    fetch(Url + companyid + '/sub_area')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setsubareachange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [pageupdate]);

  return (
    <Card sx={{ paddingTop: 5, paddingBottom: 100 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{paddingLeft: 2}}>
          <Card>
            <Grid container  spacing={2} marginLeft={4}>
              <Grid item xs={8}>
                <TextField value={name} onChange={(e) => namechange(e.target.value)} fullWidth id="outlined-basic" size="small" placeholder='Area' variant="standard"/>
              </Grid>
              <Grid item>
                <IconButton edge="end" aria-label="delete" onClick={handlesubmit}>
                  <AddCircleTwoToneIcon color='primary'/>
                </IconButton>
              </Grid>
            </Grid>

            <Grid item xs={8} sx={{ paddingLeft: 5 }}>
              <List>
              {area &&
              area.map((row, index) => (
                <ListItem key={index}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={row.name} />
                </ListItem>
              ))}

               
               
              </List>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={6} sx={{paddingRight: 1}}>
          <Card>
            
              <Grid item xs={8} sx={{paddingLeft: 6, paddingBottom: 2}}>
              <FormControl fullWidth size="small" variant="filled">
                    <InputLabel htmlFor="outlined-age-native-simple">Select Area</InputLabel>
                    <Select
                      native
                      defaultValue={1}
                      onChange=""
                      label="Select Area"
                     
                    >
                       {area &&
                       area.map((row, index) => (
                      <option key={index} aria-label="None" value={row.id}>{row.name} </option>
                     
                       ))}
                    </Select>
                  </FormControl>
              </Grid>
              <Grid container  spacing={2} marginLeft={4}>
              <Grid item xs={8}>
                <TextField fullWidth id="outlined-basic" size="small" placeholder="Sub Area" variant="standard"/>
              </Grid>
              <Grid item>
                <IconButton edge="end" aria-label="delete">
                  <AddCircleTwoToneIcon color='primary' />
                </IconButton>
              </Grid>
            </Grid>         
            

            <Grid item xs={8} sx={{ paddingLeft: 5 }}>
              <List>
              {subarea &&
              subarea.map((row, index) => (
                <ListItem key={index}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={row.name} />
                </ListItem>
              ))}
                
              </List>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Area;
