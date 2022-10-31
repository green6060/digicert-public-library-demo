import { Box, Grid } from '@mui/material'
import { useAppSelector } from '../../app/hooks'
import BookCard from './bookCard/BookCard'
import { selectBooks, selectLoadingStatus } from './LibraryReducer'

type Props = {}

const Library = (props: Props) => {
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
      'Loading'
      }
      
    </Box>

  )
}

export default Library