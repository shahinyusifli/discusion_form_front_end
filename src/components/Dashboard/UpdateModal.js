import Button from '@mui/material/Button';
import DashboardEditText from './DashboardEditText';
import { Grid } from '@mui/material';
import authGetUserRole from '../../services/User/get-user-role';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SettingsIcon from '@mui/icons-material/Settings';
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

export default function UpdateModal({ data }) {
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
                <Button data_testid = "OpenUpdate" color='primary' onClick={handleOpen}>Update</Button> : <Button disabled>Update</Button>}
        
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
        
                  <Button data_testid = "CloseUpdate" onClick={handleClose}>You can close</Button>
                </Box>
              </Modal>
            </React.Fragment>
          );
        }