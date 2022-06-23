import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle } from '@mui/material';
import { useState, useEffect } from 'react';

export default function UpdateWaste(props) {
  const { waste, onSubmit, handleClose } = props;

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [dateAccepted, setDateAccepted] = useState('');
  const [dateReturned, setDateReturned] = useState('');
  useEffect(() => {
    initializeForm();
  }, []);

  const initializeForm = () => {
    if (waste.name != null) {
      setName(waste.name);
    }
    if (waste.owner != null) {
      setOwner(waste.owner);
    }
    if (waste.price != null) {
      setPrice(waste.price);
    }

    if (waste.city != null) {
      setCity(waste.city);
    }

    if (waste.state != null) {
      setState(waste.state);
    }

    if (waste.postalCode != null) {
      setPostalCode(waste.postalCode);
    }
    if (waste.dateAccepted != null) {
      setDateAccepted(waste.dateAccepted);
    }
    if (waste.dateReturned != null) {
      setDateReturned(waste.dateReturned);
    }
  };

  const updateWasteHandler = (event) => {
    event.preventDefault();
    onSubmit(
      waste.id,
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

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ownerChangeHandler = (event) => {
    setOwner(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };
  const stateChangeHandler = (event) => {
    setState(event.target.value);
  };
  const postalCodeChangeHandler = (event) => {
    setPostalCode(event.target.value);
  };
  const dateAcceptedChangeHandler = (event) => {
    setDateAccepted(event.target.value);
  };
  const dateReturnedChangeHandler = (event) => {
    setDateReturned(event.target.value);
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>Update Waste Item</DialogTitle>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              onChange={nameChangeHandler}
              value={name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Owner"
              onChange={ownerChangeHandler}
              value={owner}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price"
              onChange={priceChangeHandler}
              value={price}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="City"
              onChange={cityChangeHandler}
              value={city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="State"
              onChange={stateChangeHandler}
              value={state}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Postal Code"
              onChange={postalCodeChangeHandler}
              value={postalCode}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Accepted"
              onChange={dateAcceptedChangeHandler}
              type="date"
              value={dateAccepted}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Returned"
              onChange={dateReturnedChangeHandler}
              type="date"
              value={dateReturned}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          type="submit"
          onClick={updateWasteHandler}
          variant="contained"
        >
          Update Waste Item
        </Button>
      </Box>
    </Dialog>
  );
}

UpdateWaste.propTypes = {
  waste: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
