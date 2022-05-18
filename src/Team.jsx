import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Team() {
  const classes = useStyles();

  const [teams, setTeams] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://fakerapi.it/api/v1/persons?_quantity=5')
    .then(response => setTeams(response.data.data))
  }, [])
  
  useEffect(() => {
    axios.get('https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens&_height=300')
    .then(response => setImages(response.data.data))
  }, [])
  

  return (
      <div className='md:flex'>
        <div className="w-1/5 h-screen bg-black text-center">
              <h1 className="text-white mt-8 text-2xl font-semibold pb-32 tracking-wider">Dashboard</h1>
              <Link to="/product">
                <h1 className="text-white text-xl mb-16 tracking-wider">Products</h1>
              </Link>
              <Link to="/team">
                <h1 className="text-white text-lg mb-16 border-l-4">Team</h1>
              </Link>
              <Link to="/client">
                <h1 className="text-white text-lg pb-64">Clients</h1>
              </Link>
              <Link to="/">
                  <h1 className="text-white text-lg mb-16">Logout</h1>
              </Link>
        </div>
        <Slide left>
          <div className='pt-6 ml-8'>
                    <Link to="/dashboard">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </div>
                    </Link>
            </div>
        </Slide>
        <Slide left>
          <div className="px-20 pr-20 pt-20 pb-12">
            <TableContainer className="" component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                      <TableRow>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell align="right">Email</StyledTableCell>
                      <StyledTableCell align="right">Phone</StyledTableCell>
                      <StyledTableCell align="right">Gender</StyledTableCell>
                      <StyledTableCell align="right">Address</StyledTableCell>
                      <StyledTableCell align="right">Image</StyledTableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {teams ? teams.map((team, idx) => (
                      <StyledTableRow key={idx}>
                          <StyledTableCell component="th" scope="row">
                          {team.firstname} {team.lastname}
                          </StyledTableCell>
                          <StyledTableCell align="right">{team.email}</StyledTableCell>
                          <StyledTableCell align="right">{team.phone}</StyledTableCell>
                          <StyledTableCell align="right">{team.gender}</StyledTableCell>
                          <StyledTableCell align="right">{team.address.street}, {team.address.streetName}, {team.address.city}, {team.address.country}.</StyledTableCell>
                          {images ? images.map((image, idx) => (
                            <StyledTableCell key={idx} align="right">{image.url}</StyledTableCell>
                          )) : null
                          }
                      </StyledTableRow>
                      ))
                      : null
                      }
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
        </Slide>
      </div>
  );
}