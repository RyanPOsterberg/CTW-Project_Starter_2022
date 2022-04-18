import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

function AppNavigation(props) {
  const { active, onCloseClick } = props;

  return (
    <Drawer onClose={onCloseClick} open={active}>
      <Toolbar>
        <IconButton onClick={onCloseClick}>
          <ChevronLeft />
        </IconButton>
      </Toolbar>
      <Divider />
    </Drawer>
  );
}

AppNavigation.propTypes = {
  active: PropTypes.bool,
  onCloseClick: PropTypes.func,
};

AppNavigation.defaultProps = {
  active: false,
  onCloseClick: undefined,
};

export default AppNavigation;