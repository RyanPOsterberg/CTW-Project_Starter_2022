import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function AddStudent(props) {
  const {
    firstName,
    lastName,
    birthDate,
    cellPhone,
    emailAddress,
    onFirstNameChange,
    onLastNameChange,
    onBirthDateChange,
    onCellPhoneChange,
    onEmailAddressChange,
    onSubmit,
  } = props;

  const onSubmitDisabled =
    !firstName || !lastName || !birthDate || !cellPhone || !emailAddress;

  const addStudentHandler = (event) => {
    event.preventDefault();
    onSubmit(firstName, lastName, birthDate, cellPhone, emailAddress);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            onChange={(event) => onFirstNameChange(event.target.value)}
            required
            value={firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            onChange={(event) => onLastNameChange(event.target.value)}
            required
            value={lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date of Birth"
            onChange={(event) => onBirthDateChange(event.target.value)}
            required
            type="date"
            value={birthDate}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Cell Phone Number"
            onChange={(event) => onCellPhoneChange(event.target.value)}
            required
            value={cellPhone}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email Address"
            onChange={(event) => onEmailAddressChange(event.target.value)}
            required
            type="email"
            value={emailAddress}
          />
        </Grid>
      </Grid>
      <Button
        disabled={onSubmitDisabled}
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        onClick={addStudentHandler}
        variant="contained"
      >
        Add Student
      </Button>
    </Box>
  );
}

AddStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  cellPhone: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onBirthDateChange: PropTypes.func.isRequired,
  onCellPhoneChange: PropTypes.func.isRequired,
  onEmailAddressChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
