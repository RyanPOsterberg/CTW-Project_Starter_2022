import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function WasteList(props) {
  const { wasteList, archiveWasteHandler, updateWasteHandler } = props;

  const archiveWaste = (event) => {
    archiveWasteHandler(event.target.value);
  };

  const updateWaste = (event) => {
    updateWasteHandler(event.target.value);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {wasteList.map((waste) => (
          <Grid item xs={12} key={waste.id}>
            <Typography component="p">{waste.id}</Typography>
            <Typography component="p">Item Name: {waste.wasteName}</Typography>
            <Typography component="p">Owner: ${waste.wasteOwner}</Typography>
            <Typography component="p">Price: ${waste.wastePrice}</Typography>
            <Typography component="p">City: {waste.wasteCity}</Typography>
            <Typography component="p">State: {waste.wasteState}</Typography>
            <Typography component="p">
              Postal Code: {waste.wastePostalCode}
            </Typography>
            <Typography component="p">
              Date Accepted: {waste.wasteDateAccepted}
            </Typography>
            <Typography component="p">
              Date Returned: {waste.wasteDateReturned}
            </Typography>
            {/* <Button value={wasteList.id} onClick={archiveWaste}>
              Delete
            </Button> */}
            <Button value={wasteList.id} onClick={updateWaste}>
              Update
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
WasteList.propTypes = {
  wasteList: PropTypes.array,
  archiveWasteHandler: PropTypes.func,
  updateWasteHandler: PropTypes.func,
};

WasteList.defaultProps = {
  wasteList: [],
  archiveWasteHandler: () => {},
  updateWasteHandler: () => {},
};
