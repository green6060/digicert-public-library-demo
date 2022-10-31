import { Box, CircularProgress, Grid } from '@mui/material'
import { useAppSelector } from '../../app/hooks'
import BookCard from './bookCard/BookCard'
import { selectBooks, selectLoadingStatus } from './LibraryReducer'

const Library = () => {
  const books = useAppSelector(selectBooks)
  const bookLoadingStatus = useAppSelector(selectLoadingStatus)
  return (   
    <Box sx={{ flexGrow: 1 }}>
      {!bookLoadingStatus ? 
      <Grid container spacing={2}>
        {books.map((book) => (
          <BookCard bookInfo={book}/>
        ))}
      </Grid>
      :
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      }
      
    </Box>

  )
}

export default Library