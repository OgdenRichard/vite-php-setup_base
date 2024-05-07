import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { SuModal } from 'sumodal';
import { PageTitle } from '../components/PageTitle';
import { FormView } from '../features/form/FormView';
import { displayModal } from '../features/form/formSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.employees.showModal);
  const toggleModal = useCallback(() => {
    dispatch(displayModal(false));
  }, [dispatch]);

  return (
    <>
      <PageTitle title="HRnieet" variant="h3" my={5} />
      <FormView />
      {showModal && (
        <SuModal
          isOpen={showModal}
          setIsOpen={toggleModal}
          closeOnEscKey={false}
          styleOptions={{
            background: { zIndex: 10000 },
          }}
        >
          <Box sx={{ m: 12 }}>
            <Typography>Employee created !</Typography>
          </Box>
        </SuModal>
      )}
    </>
  );
};
