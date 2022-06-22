import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle } from '@mui/material';
import { useState, useEffect } from 'react';

export default function UpdateWaste(props) {
  const { waste, onSubmit, handleClose } = props;

  const [itemName, setItemName] = useState('');
  const [owner, setOwner] = useState('');
  const [value, setValue] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [accepted, setAccepted] = useState('');
  const [returned, setReturned] = useState('');
  useEffect(() => {
    initializeForm();
  });

  const initializeForm = () => {
    if (waste.WasteItemName != null) {
      setItemName(waste.wasteItemName);
    }
    if (waste.wasteOwner != null) {
      setOwner(waste.wasteOwner);
    }
    if (waste.wasteCity != null) {
      setCity(waste.wastecity);
    }

    if (waste.wasteState != null) {
      setState(waste.wasteState);
    }

    if (waste.wasteZip != null) {
      setZip(waste.wasteZip);
    }
    if (waste.wasteAccepted != null) {
      setAccepted(waste.wasteAccepted);
    }
    if (waste.wasteReturned != null) {
      setReturned(waste.wasteReturned);
    }
  };

  const updateWasteHandler = (event) => {
    event.preventDefault();
    onSubmit(
      waste.id,
      itemName,
      owner,
      value,
      city,
      state,
      zip,
      accepted,
      returned
    );
  };

  const itemNameChangeHandler = (event) => {
    setItemName(event.target.value);
  };
  const ownerChangeHandler = (event) => {
    setOwner(event.target.value);
  };
  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };
  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };
  const stateChangeHandler = (event) => {
    setState(event.target.value);
  };
  const zipChangeHandler = (event) => {
    setZip(event.target.value);
  };
  const acceptedChangeHandler = (event) => {
    setAccepted(event.target.value);
  };
  const returnedChangeHandler = (event) => {
    setReturned(event.target.value);
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>Update Waste Item</DialogTitle>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Item Name"
              onChange={itemNameChangeHandler}
              value={itemName}
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
              label="Value"
              onChange={valueChangeHandler}
              value={value}
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
              label="Zip"
              onChange={zipChangeHandler}
              value={zip}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Accepted"
              onChange={acceptedChangeHandler}
              type="date"
              value={accepted}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Returned"
              onChange={returnedChangeHandler}
              type="date"
              value={returned}
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
          Update Student
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
