import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function AddWaste(props) {
  const {
    name,
    owner,
    price,
    city,
    state,
    postalCode,
    dateAccepted,
    dateReturned,
    onNameChange,
    onOwnerChange,
    onPriceChange,
    onCityChange,
    onStateChange,
    onPostalCodeChange,
    onDateAcceptedChange,
    onDateReturnedChange,
    onSubmit,
  } = props;

  const onSubmitDisabled =
    !name ||
    !owner ||
    !price ||
    !city ||
    !state ||
    !postalCode ||
    !dateAccepted ||
    !dateReturned;

  const addWasteHandler = (event) => {
    event.preventDefault();
    onSubmit(
      name,
      owner,
      price,
      city,
      state,
      postalCode,
      dateAccepted,
      dateReturned
    );
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            onChange={(event) => onNameChange(event.target.value)}
            required
            value={name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Owner"
            onChange={(event) => onOwnerChange(event.target.value)}
            required
            value={owner}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Price"
            onChange={(event) => onPriceChange(event.target.value)}
            required
            type="number"
            value={price}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="City"
            onChange={(event) => onCityChange(event.target.value)}
            required
            value={city}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="State"
            onChange={(event) => onStateChange(event.target.value)}
            required
            value={state}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Postal Code"
            onChange={(event) => onPostalCodeChange(event.target.value)}
            required
            value={postalCode}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date Accepted"
            onChange={(event) => onDateAcceptedChange(event.target.value)}
            required
            type="date"
            value={dateAccepted}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date Returned"
            onChange={(event) => onDateReturnedChange(event.target.value)}
            required
            type="date"
            value={dateReturned}
          />
        </Grid>
      </Grid>
      <Button
        disabled={onSubmitDisabled}
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        onClick={addWasteHandler}
        variant="contained"
      >
        Add Item
      </Button>
    </Box>
  );
}

AddWaste.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  dateAccepted: PropTypes.string.isRequired,
  dateReturned: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onOwnerChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onStateChange: PropTypes.func.isRequired,
  onPostalCodeChange: PropTypes.func.isRequired,
  onDateAcceptedChange: PropTypes.func.isRequired,
  onDateReturnedChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
