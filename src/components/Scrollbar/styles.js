'use client';

import SimpleBar from 'simplebar-react';
import { alpha, styled } from '@mui/material/styles';
import 'simplebar-react/dist/simplebar.min.css';

// ----------------------------------------------------------------------

export const StyledRootScrollbar = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

export const StyledScrollbar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar:before': {
    backgroundColor: alpha(theme.palette.grey[600], 0.48),
  },
  '& .simplebar-scrollbar.simplebar-visible:before': {
    opacity: 1,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));
