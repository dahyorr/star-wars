import { Dialog, DialogTitle, DialogContent, Breakpoint, LinearProgress } from '@mui/material'
import React from 'react'

interface BaseModalProps{
  children: React.ReactNode,
  open: boolean,
  onClose: () => void,
  title?: string;
  maxWidth?: Breakpoint | false;
  loading?: boolean;
}

const BaseModal: React.FC<BaseModalProps> = ({
  title,
  children,
  open,
  onClose,
  maxWidth,
  loading
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={maxWidth}>
      {loading && <LinearProgress 
        sx={{
          height: 8
        }}
      />}
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default BaseModal