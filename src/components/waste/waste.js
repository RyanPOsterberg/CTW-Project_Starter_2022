import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AddWaste from './waste-forms/add-waste';
import WasteList from './waste-list';
import UpdateWaste from './waste-forms/update-waste';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

export default function Waste() {
  const [itemName, setItemName] = useState('');
  const [owner, setOwner] = useState('');
  const [value, setValue] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [accepted, setAccepted] = useState('');
  const [returned, setReturned] = useState('');
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
    setActiveWasteList(response.filter((waste) => waste.active === true));
  };

  const onAddWasteFormSubmit = async (
    enteredItemName,
    enteredOwner,
    enteredValue,
    enteredCity,
    enteredState,
    enteredZip,
    enteredAccepted,
    enteredReturned
  ) => {
    const newWaste = {
      Name: enteredItemName,
      Owner: enteredOwner,
      Value: enteredValue,
      City: enteredCity,
      State: enteredState,
      PostalCode: enteredZip,
      Accepted: enteredAccepted,
      Returned: enteredReturned,
      active: true,
    };

    await addWaste(newWaste);
    refreshWaste();
    setItemName('');
    setOwner('');
    setValue('');
    setCity('');
    setState('');
    setZip('');
    setAccepted('');
    setReturned('');
  };

  const archiveWasteHandler = async (wasteId) => {
    const updatedWaste = {
      id: wasteId,
      active: false,
    };
    await updateWaste(updatedWaste);
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
    newItemName,
    newOwner,
    newValue,
    newCity,
    newState,
    newZip,
    newAccepted,
    newReturned
  ) => {
    const updatedWaste = {
      id: wasteId,
      wasteItemName: newItemName,
      wasteOwner: newOwner,
      wasteValue: newValue,
      wasteCity: newCity,
      wasteState: newState,
      wasteZip: newZip,
      wasteAccepted: newAccepted,
      wasteReturned: newReturned,
      active: true,
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
            Waste Items
          </Typography>
          <AddWaste
            itemName={itemName}
            owner={owner}
            value={value}
            city={city}
            state={state}
            zip={zip}
            accepted={accepted}
            returned={returned}
            onItemNameChange={setItemName}
            onOwnerChange={setOwner}
            onValueChange={setValue}
            onCityChange={setCity}
            onStateChange={setState}
            onZipChange={setZip}
            onAcceptedChange={setAccepted}
            onReturnedChange={setReturned}
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
          <WasteList
            wasteItems={activeWasteList}
            archiveWasteHandler={archiveWasteHandler}
            updateWasteHandler={updateModalChange}
          />
        </Box>
      </Container>
    </div>
  );
}
