import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { Url } from 'Global';
import { TextField } from '@mui/material';

export default function CmplntFetch({ onSendData , onClose}) {

  const companyid = JSON.parse(localStorage.getItem('id'));

  const [serchname, serchnamechange] = useState('');
  const [categoryId, categoryIdchnge] = useState('');
  const [customer, customerchange] = useState('');
  const [phone, phonechange] = useState('');
  const [complaint, remarkchange] = useState('');
  const [custName, custNamechange] = useState('');
  const [address, addresschange] = useState('');
  const [custsearch, custsearchchange] = useState(null);
  const [assignedStaffId, staffIdchange] = useState();
  const [totalrecords, totalrecordschange] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingfetch, setLoadingfetch] = useState(false);
  const [crfnumber, setCrfnumber] = useState(false);

  // Fetching Data From API

  async function fetchfunctn(credentials) {
    setLoading(true);
    return fetch(Url + companyid +'/customer_search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then((data) => data.json());
  }

  useEffect(() => {
    const fetchbtn = async () => {
      
      const response = await fetchfunctn({
        custName,
        address
      })
        .then((response) => {
          custsearchchange(response.data);
          totalrecordschange(response.count);
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchbtn();
  }, [address]);

  const handleSelect = (crfid , custid) => (e) => {
    setCrfnumber(crfid);
    onSendData(crfid , custid);
    onClose();
  };

  return (
    <div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 mb-4 pb-2">
            <div className="form-outline">
              <label>SEARCH : ( Name / CRF Number ) </label>
              <input required onChange={(e) => custNamechange(e.target.value)} className="form-control form-control-md"></input>
            </div>
          </div>
          <div className="col-md-4 mb-4 pb-2">
            <div className="form-outline">
              <label>ADDRESS :</label>
              <input required onChange={(e) => addresschange(e.target.value)} className="form-control form-control-md"></input>
            </div>
          </div>

          <br></br>
          <table className="table table-bordered">
            <thead className="bg-local text-white">
              <tr>
                <td>ID</td>
                <td>CRF NO</td>
                <td>NAME</td>
                <td>PHONE</td>
                <td>ADDRESS</td>
                <td>ACTION</td>
              </tr>
            </thead>
            <tbody>
              {custsearch &&
                custsearch.map((data, index) => (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td> {data.crfNumber}</td>
                    <td>
                      {data.firstName}
                      {data.middleName}
                      {data.lastName}
                    </td>
                    <td>{data.phone}</td>
                    <td>{data.address}</td>
                    <td>
                      <Button onClick={handleSelect(data.crfNumber , data.id)}>select</Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
