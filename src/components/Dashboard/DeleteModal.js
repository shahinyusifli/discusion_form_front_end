import DashboardDelete from './DashboardTopicDelete';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
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

export default function DeleteModal({ data }) {
          const [open, setOpen] = React.useState(false);
          const handleOpen = () => {
            setOpen(true);
          };
          const handleClose = () => {
            setOpen(false);
          };
        
          return (
                    <>
              {authGetUserRole() === 'admin' ?
                <Button color='error' onClick={handleOpen}>Delete</Button> : <Button disabled>Delete</Button>}
        
              <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
              >
                <Box data_testid="boxContainDeleteClose" sx={{ ...style, width: 200, margin: 'center' }}>
        
                  <DashboardDelete data={data} />
        
                  <Button onClick={handleClose}>You can close</Button>
                </Box>
              </Modal>
           </>
          );
        }