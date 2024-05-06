import {
  Stack,
  Button,
  FormLabel,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from '@mui/x-date-pickers';
import { DropdownSelect } from '../../components/DropdownSelect';
import { states, departments } from '../../data/selectValues';
import {
  setFirstName,
  setLastName,
  setBirthDate,
  setStartDate,
  setStreet,
  setCity,
  setState,
  setZipCode,
  setDepartment,
  submitForm,
} from './formSlice';

export const FormView = () => {
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.employees.formdata.firstname);
  const lastname = useSelector((state) => state.employees.formdata.lastname);
  const city = useSelector((state) => state.employees.formdata.city);
  const street = useSelector((state) => state.employees.formdata.street);
  const usState = useSelector((state) => state.employees.formdata.state);
  const department = useSelector(
    (state) => state.employees.formdata.department,
  );
  const birthdate = useSelector((state) => state.employees.formdata.birthdate);
  const startdate = useSelector((state) => state.employees.formdata.startdate);
  const zipcode = useSelector((state) => state.employees.formdata.zipcode);

  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
          Create Employee
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mb: 2 }}
        >
          <TextField
            required
            error={firstname.error}
            variant="outlined"
            label="First Name"
            value={firstname.val}
            fullWidth
            helperText={firstname.error ? 'Required' : ''}
            onChange={(e) => dispatch(setFirstName(e.target.value))}
          />
          <TextField
            required
            error={lastname.error}
            variant="outlined"
            label="Last Name"
            value={lastname.val}
            fullWidth
            helperText={lastname.error ? 'Required' : ''}
            onChange={(e) => dispatch(setLastName(e.target.value))}
          />
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mb: 2 }}
        >
          <DatePicker
            label="Date of Birth"
            slotProps={{ textField: { fullWidth: true } }}
            value={birthdate ? dayjs(birthdate) : null}
            onAccept={(val) =>
              dispatch(setBirthDate(val ? val.toISOString(true) : null))
            }
          />
          <DatePicker
            label="Start Date"
            slotProps={{ textField: { fullWidth: true } }}
            value={startdate ? dayjs(startdate) : null}
            onAccept={(val) =>
              dispatch(setStartDate(val ? val.toISOString(true) : null))
            }
          />
        </Stack>
        <Stack
          sx={{
            border: 1,
            mb: 2,
            p: 2,
            borderRadius: 1,
            borderColor: 'grey.500',
          }}
        >
          <FormLabel sx={{ mb: 2 }}>Address</FormLabel>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mb: 2 }}
          >
            <TextField
              variant="outlined"
              label="Street"
              fullWidth
              value={street}
              onChange={(e) => dispatch(setStreet(e.target.value))}
            />
            <TextField
              variant="outlined"
              label="City"
              fullWidth
              value={city}
              onChange={(e) => dispatch(setCity(e.target.value))}
            />
          </Stack>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mb: 2 }}
          >
            <DropdownSelect
              data={states}
              datakey="key"
              label="state"
              reducer={setState}
              keyAsVal
              storeVal={usState}
            />
            <TextField
              variant="outlined"
              type="number"
              label="Zip Code"
              fullWidth
              value={zipcode}
              onChange={(e) => dispatch(setZipCode(e.target.value))}
            />
          </Stack>
        </Stack>
        <DropdownSelect
          data={departments}
          datakey="key"
          label="department"
          reducer={setDepartment}
          storeVal={department.val}
          error={department.error}
          required
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => dispatch(submitForm())}
        >
          Save
        </Button>
      </Box>
    </>
  );
};
