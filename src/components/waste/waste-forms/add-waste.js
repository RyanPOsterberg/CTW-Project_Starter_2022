import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function AddWaste(props) {
  const {
    itemName,
    owner,
    value,
    city,
    state,
    zip,
    accepted,
    returned,
    onItemNameChange,
    onOwnerChange,
    onValueChange,
    onCityChange,
    onStateChange,
    onZipChange,
    onAcceptedChange,
    onReturnedChange,
    onSubmit,
  } = props;

  const onSubmitDisabled =
    !itemName ||
    !owner ||
    !value ||
    !city ||
    !state ||
    !zip ||
    !accepted ||
    !returned;

  const addWasteHandler = (event) => {
    event.preventDefault();
    onSubmit(itemName, owner, value, city, state, zip, accepted, returned);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Item Name"
            onChange={(event) => onItemNameChange(event.target.value)}
            required
            value={itemName}
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
            label="Value"
            onChange={(event) => onValueChange(event.target.value)}
            required
            type="number"
            value={value}
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
            label="Zip"
            onChange={(event) => onZipChange(event.target.value)}
            required
            value={zip}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date Accepted"
            onChange={(event) => onAcceptedChange(event.target.value)}
            required
            type="date"
            value={accepted}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date Returned"
            onChange={(event) => onReturnedChange(event.target.value)}
            required
            type="date"
            value={returned}
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
  itemName: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  accepted: PropTypes.string.isRequired,
  returned: PropTypes.string.isRequired,
  onItemNameChange: PropTypes.func.isRequired,
  onOwnerChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onStateChange: PropTypes.func.isRequired,
  onZipChange: PropTypes.func.isRequired,
  onAcceptedChange: PropTypes.func.isRequired,
  onReturnedChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
