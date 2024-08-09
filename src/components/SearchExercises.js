import React,{ useEffect , useState} from 'react'
import { Box, Button, Stack, TextField, Typography} from '@mui/material';
import { exerciseOptions , fetchData} from '../utils/fetchData';
import HorizontalSrollbar from './HorizontalSrollbar';



const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search,setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])
  useEffect(() => {
    const fetchExercisesData =async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartData]);
    }

    fetchExercisesData();
  }, [])
  

  
  const handleSearch = async () => {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      /* console.log(exercisiseData); */

      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)||exercise.target.toLowerCase().includes(search)||exercise.equipment.toLowerCase().includes(search)||exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems={"center"} mt="37px" justifyContent={"center"} p="20px">
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px' ,xs: '30px'}}} 
      mb='50px' textAlign={"center"}>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField 
        sx={{
          input: { fontWeight: '700',
          bordor: 'none',
          borderRadius:'4px'},
          width: {lg: "800px",xs: "350px"},
          backgroundColor:"#fff",
          borderRadius:"40px"
        }}
        height="76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            widta: { lg: '175px', xs: '80px'},
            fontSize:{ lg: '20px' , xs: '14px'},
            height:"56px",
            width:{lg: '120px', s:'80px'},
            position:"absolute",
            right:'0'
          }}
          onClick={handleSearch} >
            <Typography>
            Search
            </Typography>
        </Button>
      </Box>
      <Box sx={{ position: 'relative' , width: '100%', p:'20px'}}>
        <HorizontalSrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts={true} />
        
      </Box>
    </Stack>
  )
}

export default SearchExercises