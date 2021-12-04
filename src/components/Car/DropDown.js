// import React from "react";
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';
// import CompareBlock from './CompareBlock';

// export default function DropDown({minfo, data, NewData}) {

//     return (
//         <>
//             <Box sx={{ minWidth: 120 }}>
//                 <FormControl fullWidth>
//                     <InputLabel variant="standard" htmlFor="uncontrolled-native">
//                     </InputLabel>
//                         <NativeSelect
//                         defaultValue={10}
//                         inputProps={{
//                             name: 'age',
//                             id: 'uncontrolled-native',
//                         }}
//                         >
//                             <option>{minfo.model1}</option>
//                             <option>{minfo.model2}</option>
//                         </NativeSelect>
//                 </FormControl>
//             </Box>
//             <div>
//                 {NewData.map((cinfo, key) => (
//                     <CompareBlock key={key} cinfo={NewData[cinfo]}/>
//                 ))}
//             </div>
//         </>
//     )
// }
