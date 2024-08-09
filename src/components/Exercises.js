import React, {useState , useEffect} from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';
import ExerciseCard from './ExerciseCard';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import BodyPart from './BodyPart';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage=9;

  const indexOfLastExersise =currentPage * exercisesPerPage;
  const indexOfFirstExercise= indexOfLastExersise - exercisesPerPage;
  const currentExercises= exercises.slice(indexOfFirstExercise,indexOfLastExersise);

  const paginate =(e, value) =>{
    setCurrentPage(value);

    window.scrollTo({top : 1800, behavior:"smooth"})
  }
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);;
      } else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }
  
    fetchExercisesData();
  }, [bodyPart])
  
  return (
    <Box id="exercises"
      sx={{mt:{ lg: '110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack onClick={() => {window.scrollTo({top: 100,left:100,behavior:'smooth'})}} direction="row" sx={{gap:{lg: '110px',xs:'50px'}}}
      flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}/>
          ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination 
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>


    </Box>
  )
}

export default Exercises