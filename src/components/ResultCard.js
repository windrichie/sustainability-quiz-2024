import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';

const ResultCard = ({ result }) => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} sm={5}>
          <CardMedia
            component="img"
            alt={result.name}
            image={result.imageUrl}
            title={result.name}
            style={{ objectFit: 'contain', width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <CardContent>
            <Typography variant="h2">{result.name}</Typography>
            <Typography variant="body1">{result.description}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ResultCard;