import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';

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
      <SettingsIcon data-testid="settingsIcon" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        data-testid="generalModal"
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
