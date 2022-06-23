import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function StudentsList(props) {
  const { students, archiveStudentHandler, updateStudentHandler } = props;

  const archiveStudent = (event) => {
    archiveStudentHandler(event.target.value);
  };

  const updateStudent = (event) => {
    updateStudentHandler(event.target.value);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {students.map((student) => (
          <Grid item xs={12} key={student.id}>
            <Typography component="p">{student.id}</Typography>
            <Typography component="p">
              {student.studentLastName}, {student.studentFirstName}
            </Typography>
            <Typography component="p">
              Date of Birth: {student.studentDateOfBirth.substring(0, 10)}
            </Typography>
            <Typography component="p">Email: {student.studentEmail}</Typography>
            <Typography component="p">
              Phone Number: {student.studentCellPhone}
            </Typography>
            <Button value={student.id} onClick={archiveStudent}>
              Delete
            </Button>
            <Button value={student.id} onClick={updateStudent}>
              Update
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

StudentsList.propTypes = {
  students: PropTypes.array.isRequired,
  archiveStudentHandler: PropTypes.func.isRequired,
  updateStudentHandler: PropTypes.func.isRequired,
};
