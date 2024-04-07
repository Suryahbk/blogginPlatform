// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from "@mui/material";
// import ViewDetails from "./viewDetails";

// export default function Home() {

//   const [state, setState] = useState({
//     records: null
//   });

//   useEffect(() => {
//     axios.get(`https://dev.to/api/articles`)
//       .then((res) => {
//         const data = res.data;
//         setState({ ...state, records: data })
//       })
//       .catch((err) => console.log("===error====:>" + JSON.stringify(err))
//       )
//   }, [])

//   // const handleEdit = (param) => {
//   //   const updatedItem = axios.put(`https://dev.to/api/articles`, {
//   //     method: 'PUT',
//   //     Authorization: "bearer"
//   //   })
//   // }

//   const handleEdit = (index) => {
//     return <ViewDetails props={index} />
//   };

//   // console.log("===records====:>" + JSON.stringify(state.records))

//   return (
//     <div>
//       <Grid container>
//         <Grid item xs={12}>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//               <TableHead style={{ backgroundColor: "lightgray" }}>
//                 <TableRow>
//                   <TableCell align="center" style={{ fontWeight: "bold" }}>Id</TableCell>
//                   <TableCell align="center" style={{ fontWeight: "bold" }}>Organisation Name</TableCell>
//                   <TableCell align="center" style={{ fontWeight: "bold" }}>User Name</TableCell>
//                   <TableCell align="center" style={{ fontWeight: "bold" }}>Title</TableCell>
//                   <TableCell align="center" style={{ fontWeight: "bold" }}>Action</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {!!state.records && state.records.map((item, index) => (
//                   <TableRow key={item.id} style={{ backgroundColor: index % 2 === 0 ? "#fff" : "whitesmoke" }}>
//                     <TableCell align="center">{item.id}</TableCell>
//                     <TableCell align="center">{!!item.organization && item.organization.name}</TableCell>
//                     <TableCell align="center">{!!item.user && item.user.name}</TableCell>
//                     <TableCell align="center">{item.title}</TableCell>
//                     <TableCell align="center">
//                       <Button variant="contained" onClick={() => handleEdit(index)}>View Details</Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

import Home from "../screens/Home";

export default Home;
