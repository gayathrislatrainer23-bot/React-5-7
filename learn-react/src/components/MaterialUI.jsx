import {Box, TextField, Typography} from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const MaterialUI = ()=>{
    return(
//         <Box sx={{padding:2}}>
 // <Typography variant="h6">Login Form</Typography>
//      <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//           />
//         </Box>
  <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
     this is Login form
       <Typography variant="h6" sx={{fontFamily:'-apple-system' ,color: "primary.main"}}>Login Form</Typography>
       <NotificationsActiveIcon/>
    </Box>
    )
}
export default MaterialUI