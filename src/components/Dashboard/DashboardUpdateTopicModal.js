import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import DashboardDelete from './DashboardTopicDelete';
import DashboardEditText from './DashboardEditText';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid } from '@mui/material';
import authGetUserRole from '../../services/User/get-user-role';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function DeleteModal({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {authGetUserRole() === 'admin' ?
        <Button color='error' onClick={handleOpen}>Delete</Button> : <Button disabled>Delete</Button>}

      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200, margin: 'center' }}>

          <DashboardDelete data={data} />

          <Button onClick={handleClose}>You can close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function UpdateModal({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {data.timeOfLastMessage === null && authGetUserRole() === 'admin' ?
        <Button color='primary' onClick={handleOpen}>Update</Button> : <Button disabled>Update</Button>}

      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Grid xs={{ order: 12 }}>
            <DashboardEditText data={data} />
          </Grid>

          <Button onClick={handleClose}>You can close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function DashboardUpdateTopicModal({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SettingsIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Topic settings</h2>
          <p id="parent-modal-description">
            You can <span className='text-primary'>update</span> and <span className='text-danger'>delete</span> topics

          </p>
          <DeleteModal data={data} />
          <UpdateModal data={data} />
        </Box>
      </Modal>
    </div>
  );
}
