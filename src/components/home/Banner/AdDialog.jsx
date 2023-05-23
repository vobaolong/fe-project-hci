import React, { useState } from "react";
import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import adDialog from "../../../assets/banner/banner1.png";
import { useEffect } from "react";

const AdDialog = ({ onClose, onProductClick }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleProductClick = () => {
    onProductClick();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} onClick={handleProductClick}>
      <DialogActions>
        <Button onClick={handleClose}>X</Button>
      </DialogActions>
      <DialogContent>
        <img
          className="cursor-pointer"
          src={adDialog}
          alt="Chương trình khuyến mãi"
        />
      </DialogContent>
    </Dialog>
  );
};

export default AdDialog;
