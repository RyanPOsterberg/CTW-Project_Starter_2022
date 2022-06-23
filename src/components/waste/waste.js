import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AddWaste from './waste-forms/add-waste';
import WasteList from './waste-list';
import UpdateWaste from './waste-forms/update-waste';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

export default function Waste() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [dateAccepted, setDateAccepted] = useState('');
  const [dateReturned, setDateReturned] = useState('');
  const [wasteList, setWasteList] = useState([]);
  const [activeWasteList, setActiveWasteList] = useState([]);
  const [updateWasteModal, setUpdateWasteModal] = useState(false);
  const [wasteToUpdate, setWasteToUpdate] = useState('');

  useEffect(() => {
    refreshWaste();
  }, []);

  const refreshWaste = async () => {
    const response = await getWasteList();
    setWasteList(response);
    setActiveWasteList(response.filter((waste) => waste.dateReturned == null));
  };

  const onAddWasteFormSubmit = async (
    enteredName,
    enteredOwner,
    enteredPrice,
    enteredCity,
    enteredState,
    enteredPostalCode,
    enteredDateAccepted,
    enteredDateReturned
  ) => {
    const newWaste = {
      name: enteredName,
      owner: enteredOwner,
      price: enteredPrice,
      city: enteredCity,
      state: enteredState,
      postalCode: enteredPostalCode,
      dateAccepted: new Date(enteredDateAccepted),
      dateReturned: new Date(enteredDateReturned),
    };

    await addWaste(newWaste);
    refreshWaste();
    setName('');
    setOwner('');
    setPrice('');
    setCity('');
    setState('');
    setPostalCode('');
    setDateAccepted('');
    setDateReturned('');
  };

  const returnWasteHandler = async (wasteId) => {
    const wasteIndex = wasteList.findIndex((waste) => waste.id === wasteId);
    const returnedWaste = wasteList[wasteIndex];
    returnedWaste.dateReturned = new Date();
    await updateWaste(returnedWaste);
    refreshWaste();
  };

  const updateModalChange = (wasteId) => {
    if (updateWasteModal === true) {
      setUpdateWasteModal(false);
    } else {
      const wasteIndex = wasteList.findIndex((waste) => waste.id === wasteId);
      setWasteToUpdate(wasteList[wasteIndex]);
      setUpdateWasteModal(true);
    }
  };

  const updateWasteHandler = async (
    wasteId,
    newName,
    newOwner,
    newPrice,
    newCity,
    newState,
    newPostalCode,
    newDateAccepted,
    newDateReturned
  ) => {
    const updatedWaste = {
      id: wasteId,
      name: newName,
      owner: newOwner,
      price: newPrice,
      city: newCity,
      state: newState,
      postalCode: newPostalCode,
      dateAccepted: new Date(newDateAccepted),
      dateReturned: new Date(newDateReturned),
    };
    await updateWaste(updatedWaste);
    refreshWaste();
    updateModalChange();
  };

  return (
    <div>
      <Container maxWidth="sm">
        {updateWasteModal && (
          <UpdateWaste
            waste={wasteToUpdate}
            onSubmit={updateWasteHandler}
            handleClose={updateModalChange}
          />
        )}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Waste Item
          </Typography>
          <AddWaste
            name={name}
            owner={owner}
            price={price}
            city={city}
            state={state}
            postalCode={postalCode}
            dateAccepted={dateAccepted}
            dateReturned={dateReturned}
            onNameChange={setName}
            onOwnerChange={setOwner}
            onPriceChange={setPrice}
            onCityChange={setCity}
            onStateChange={setState}
            onPostalCodeChange={setPostalCode}
            onDateAcceptedChange={setDateAccepted}
            onDateReturnedChange={setDateReturned}
            onSubmit={onAddWasteFormSubmit}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Waste List
          </Typography>

          <WasteList
            wasteList={activeWasteList}
            archiveWasteHandler={returnWasteHandler}
            updateWasteHandler={updateModalChange}
          />
        </Box>
      </Container>
    </div>
  );
}
