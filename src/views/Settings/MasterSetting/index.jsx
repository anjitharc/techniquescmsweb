import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  MenuItem,
  Switch,
  Tabs,
  Tab,
  Table,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  TextField,
  Typography,
  ListItemButton,
  Paper,
  AppBar
} from '@mui/material';

// project import
import { gridSpacing } from 'config.js';
import Breadcrumb from 'component/Breadcrumb';
import Alert from 'component/Alert';
import Avatar from 'component/Avatar';

// assets
import AlertTitle from '@mui/material/AlertTitle';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';

import PhonelinkRingTwoToneIcon from '@mui/icons-material/PhonelinkRingTwoTone';
import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';

import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SmartphoneTwoToneIcon from '@mui/icons-material/SmartphoneTwoTone';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';

import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';
import Avatar3 from 'assets/images/users/avatar-3.jpg';
import UserList from 'views/AdminTable/UserTable';
import Area from './Area';
import ComplaintCategory from './ComplaintCategory';

// custom style
const AccountTabs = styled((props) => (
  <Tabs indicatorColor="primary" textColor="primary" aria-label="simple tabs example" variant="scrollable" {...props} />
))(() => ({
  marginBottom: '24px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  '.MuiButtonBase-root': {
    minWidth: '100px',
    minHeight: 'auto',
    '.MuiSvgIcon-root': {
      marginRight: '5px',
      marginBottom: '0 !important'
    }
  }
}));

const CardTitle = styled((props) => <Typography component="span" {...props} />)(() => ({
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center'
}));

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress aria-label="label" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Full Name', ':', 'Anjith'),
  createData('Company Name', ':', 'Techniques'),
  createData('Address', ':', '24 Street Balussery , Kozhikode ,Kerala'),
  createData('Pin Code', ':', '673612'),
  createData('Phone', ':', '+91 9847410859'),
  createData('Email', ':', 'support@cableman.com')
];

const currencies = [
  {
    value: 'Kozhikode',
    label: 'Kozhikode'
  },
  {
    value: 'Kannur',
    label: 'Kannur'
  },
  {
    value: 'Kochi',
    label: 'Kochi'
  },
  {
    value: 'Wayanad',
    label: 'Wayanad'
  },
  {
    value: 'Malappuram',
    label: 'Malappuram'
  }
];
const experiences = [
  {
    value: 'Startup',
    label: 'Startup'
  },
  {
    value: '2-year',
    label: '2 year'
  },
  {
    value: '3-year',
    label: '3 year'
  },
  {
    value: '4-year',
    label: '4 year'
  },
  {
    value: '5-year',
    label: '5 year'
  }
];

// ==============================|| PROFILE ||============================== //

const MasterSetting = () => {
  const theme = useTheme();

  const user = JSON.parse(localStorage.getItem('user'));
  const [type, setType] = React.useState(false);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [currency, setCurrency] = React.useState('Kozhikode');
  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };

  const [experience, setExperience] = React.useState('Startup');
  const handleChange2 = (event) => {
    setExperience(event.target.value);
  };

  const [state1, setState1] = React.useState({
    checkedA: true,
    checkedB: false
  });
  const [state2, setState2] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: true
  });
  const [state3, setState3] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: false
  });
  const handleChangeswitch1 = (event) => {
    setState1({ ...state1, [event.target.name]: event.target.checked });
  };
  const handleChangeswitch2 = (event) => {
    setState2({ ...state2, [event.target.name]: event.target.checked });
  };
  const handleChangeswitch3 = (event) => {
    setState3({ ...state3, [event.target.name]: event.target.checked });
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true
  });
  const handleChangeState = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.paper }}>
      <AppBar position="relative" color="info">
        <Tabs value={value} onChange={handleChange} textColor="inherit" aria-label="simple tabs example">
          <Tab label="Area" {...a11yProps(0)} />
          {user[0].admin == true && <Tab label="User" {...a11yProps(1)} />}
          {user[0].admin == true && <Tab label="Complaint Category" {...a11yProps(2)} />}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Area />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ComplaintCategory />
      </TabPanel>
    </Box>
  );
};

export default MasterSetting;
