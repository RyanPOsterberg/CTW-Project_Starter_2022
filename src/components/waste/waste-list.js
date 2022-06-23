import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function WasteList(props) {
  const {
    updateWasteHandler,
    wasteList,
    archiveWasteHandler,
    deleteWasteHandler,
  } = props;

  const returnWaste = (event) => {
    archiveWasteHandler(event.target.value);
  };

  const updateWaste = (event) => {
    updateWasteHandler(event.target.value);
  };
  const deleteWaste = (event) => {
    deleteWasteHandler(event.target.value);
  };
  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {wasteList.map((waste) => (
          <Grid item xs={12} key={waste.id}>
            <Typography component="p">{waste.id}</Typography>
            <Typography component="p">Item Name: {waste.name}</Typography>
            <Typography component="p">Owner: {waste.owner}</Typography>
            <Typography component="p">Price: ${waste.price}</Typography>
            <Typography component="p">City: {waste.city}</Typography>
            <Typography component="p">State: {waste.state}</Typography>
            <Typography component="p">
              Postal Code: {waste.postalCode}
            </Typography>
            <Typography component="p">
              Date Accepted: {waste.dateAccepted}
            </Typography>
            <Typography component="p">
              Date Returned: {waste.dateReturned}
            </Typography>
            <Button value={waste.id} onClick={returnWaste}>
              Return Item
            </Button>
            <Button value={waste.id} onClick={updateWaste}>
              Update
            </Button>
            <Button value={waste.id} onClick={deleteWaste}>
              Delete
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
  deleteWasteHandler: PropTypes.func,
};

WasteList.defaultProps = {
  wasteList: [],
  archiveWasteHandler: () => {},
  updateWasteHandler: () => {},
  deleteWasteHandler: () => {},
};
