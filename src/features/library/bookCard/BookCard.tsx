import { Button, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { deleteBookAsync } from '../LibraryActions'
import { selectBooks } from '../LibraryReducer'
import { BookInfo } from '../libraryService'

type Props = {
    bookInfo: BookInfo
}

const BookCard = (props: Props) => {
    const dispatch = useAppDispatch();
    const book: BookInfo = props.bookInfo;
    const books = useAppSelector(selectBooks)
    
  return (
    <>
        <Grid xs={4}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {book.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {`Written By: ${book.authors[0]}`}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {`Page Count: ${book.numberOfPages}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => dispatch(deleteBookAsync({book: book.name, library: books}))}>Delete Book</Button>
            </CardActions>
        </Grid>
    </>
  )
}

export default BookCard