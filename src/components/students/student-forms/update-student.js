import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle } from '@mui/material';
import { useState, useEffect } from 'react';

export default function UpdateStudent(props) {
  const { student, onSubmit, handleClose } = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  useEffect(() => {
    initializeForm();
  }, []);

  const initializeForm = () => {
    if (student.studentFirstName != null) {
      setFirstName(student.studentFirstName);
    }
    if (student.studentLastName != null) {
      setLastName(student.studentLastName);
    }
    if (student.studentDateOfBirth != null) {
      const date = student.studentDateOfBirth.substring(0, 10);
      setBirthDate(date);
    }
    if (student.studentCellPhone != null) {
      setCellPhone(student.studentCellPhone);
    }
    if (student.studentEmail != null) {
      setEmailAddress(student.studentEmail);
    }
  };

  const updateStudentHandler = (event) => {
    event.preventDefault();
    onSubmit(
      student.id,
      firstName,
      lastName,
      birthDate,
      cellPhone,
      emailAddress
    );
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  const birthDateChangeHandler = (event) => {
    setBirthDate(event.target.value);
  };
  const cellPhoneChangeHandler = (event) => {
    setCellPhone(event.target.value);
  };
  const emailAddressChangeHandler = (event) => {
    setEmailAddress(event.target.value);
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>Update Student</DialogTitle>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              onChange={firstNameChangeHandler}
              value={firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              onChange={lastNameChangeHandler}
              value={lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date of Birth"
              onChange={birthDateChangeHandler}
              value={birthDate}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Cell Phone Number"
              onChange={cellPhoneChangeHandler}
              value={cellPhone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              onChange={emailAddressChangeHandler}
              type="email"
              value={emailAddress}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          type="submit"
          onClick={updateStudentHandler}
          variant="contained"
        >
          Update Student
        </Button>
      </Box>
    </Dialog>
  );
}

UpdateStudent.propTypes = {
  student: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
