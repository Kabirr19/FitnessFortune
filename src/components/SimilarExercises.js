import React from 'react'
import {Box , Stack, Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalSrollbar'
import Loader from './Loader';
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg:'100px', xs:'0'}}}>
      <Typography  variant='h3' mb={5}>Exercises that target the same muscle group </Typography>
      <Stack onClick={() => {window.scrollTo({top: 100,left:100,behavior:'smooth'})}} direction='row' sx={{ p:'2',position:'relative'}}>
        {targetMuscleExercises.length ?<HorizontalScrollbar data={targetMuscleExercises} />: <Loader />}
      </Stack>

      <Typography onClick={() => {window.scrollTo({top: 100,left:100,behavior:'smooth'})}} variant='h3' mb={5}>Exercises that target use same equipment group </Typography>
      <Stack direction='row' sx={{ p:'2',position:'relative'}}>
        {equipmentExercises.length ?<HorizontalScrollbar data={equipmentExercises} />: <Loader />}
      </Stack>

      
    </Box>
  )
}

export default SimilarExercises