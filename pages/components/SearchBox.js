// components/SearchBox.js
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import Icon from './Icon'

const defaultValues = {
  searchPlace: ''
}

const SearchBox = ({ searchApi, setPlace }) => {

  //const [place, setPlace] = useState('')

  // ** Hook
  const {
    control,
    formState: { errors }
  } = useForm({ defaultValues })

  const handleTextPlace = event => {
    setPlace(event.target.value)
  }

  // const searchApi = async () => {
  //   console.log('place : ', place)
  //   const res = await axios.get(`http://localhost:4000/places?query=${place}`, {
  //     headers: {
  //       'api-key': 'AIzaSyAuUj-2rfFOQxhMPVKQSe-xI-gt3-Hrpws'
  //     }
  //   });
  //   console.log('res : ', JSON.stringify(res.data, null, 2));
  // }

  return (
    <>
      <div className="row" style={{ padding: 10 }}>
        <div style={{ textAlign: 'left', fontWeight: 'bold' }}>Search</div>
        <FormControl>
          {/* <InputLabel htmlFor='icons-adornment-password'>Password</InputLabel> */}
          <Controller
            name='searchAssetType'
            control={control}
            rules={{ required: false }}
            render={({ field: { value, onChange } }) => (
              <OutlinedInput
                // label='Password'
                value={value}
                id='icons-adornment-password'
                onChange={handleTextPlace}
                type='text'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={searchApi}
                      onMouseDown={e => e.preventDefault()}
                    >
                      <Icon fontSize={20} icon={'mdi:search'} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            )}
          />
        </FormControl>
      </div>
    </>
  );
}

export default SearchBox;
