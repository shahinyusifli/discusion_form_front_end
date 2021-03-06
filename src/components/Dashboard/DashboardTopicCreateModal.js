import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TopicCreateComponentForModal from '../Topic/TopicCreateComponentForModal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DashboardCreateTopicModal() {
  const [open, setOpen] = React.useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleMouseOver = () => { setIsHovering(true); };
  const handleMouseOut = () => { setIsHovering(false); };


  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isHovering !== false ? <Typography>You can create topic. Just click</Typography> : <Typography>Create topic</Typography>}
      <AddCircleOutlineIcon data-testid="addIcon" sx={{ fontSize: 50 }} onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TopicCreateComponentForModal />
        </Box>
      </Modal>
    </div>
  );
}
