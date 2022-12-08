import { Box, Checkbox } from '@mui/material'
import { fetchData } from '../json/posts';
import Post from './post';


export default function Feed() {
  return (
    <Box p={2} >
      {fetchData.map(item => <Post title ={item.title} image ={item.url}/> )}  
    </Box>
  )
}
