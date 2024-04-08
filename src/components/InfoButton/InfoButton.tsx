import { Box, Button, Link, Modal } from "@mui/material";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import infoImg from "src/assets/sleep-cycle-details.jpg";
import { COLORS } from "src/constants/_colors";

export const InfoButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "90vw",
    maxWidth: "800px",
    bgcolor: "background.paper",
    border: `2px solid ${COLORS.borderBlue}`,
    boxShadow: `0px 4px 25px ${COLORS.shadowBlue}`,
    margin: "auto",
    padding: 2,
  };

  return (
    <div className="fixed rounded-full" style={{ right: 0, top: 0 }}>
      <Button onClick={handleOpen}>
        <InfoIcon
          sx={{ fontSize: 35, color: "#fff", marginTop: 1, marginBottom: 1 }}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex flex-col items-center w-screen"
      >
        <Box sx={style} className="rounded-md">
          <img
            alt="info-img"
            src={infoImg}
            style={{ width: "100%", height: "100%", marginBottom: 7 }}
          />
          <Link
            className="float-right"
            href="https://recharge.energy/en/sleep-cycles/"
          >
            Learn more
          </Link>
        </Box>
      </Modal>
    </div>
  );
};
