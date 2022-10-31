import { Button, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { BookInfo } from '../libraryService'

type Props = {
    bookInfo: BookInfo
}

const BookCard = (props: Props) => {
    const book: BookInfo = props.bookInfo
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
                <Button onClick={() => (console.log('placeholder button'))}>Delete Book</Button>
            </CardActions>
        </Grid>
    </>
  )
}

export default BookCard