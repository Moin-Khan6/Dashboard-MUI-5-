import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import TextFieldCustom from "./input/input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ handleOpen, open, handleClose }) {
  

  const [postObj, setPostObj] = React.useState({
    title: "",
    url: "",
  });

  const strData =()=>{
     let dat = JSON.stringify(postObj);
     console.log("data",dat)
  }



  console.log(postObj);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Post
            </Typography>
            <Stack gap={2}>
              <TextFieldCustom
              onChange={(e)=>{setPostObj({...postObj,title:e.target.value})}}
              value={postObj.title}
              />
              <TextFieldCustom
              onChange={(e)=>{setPostObj({...postObj,url:e.target.value})}}
              value={postObj.url}
              />
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"} mt="35px">
              <Box>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    strData();
                  }}
                >
                  JSON CONVERTOR
                </Button>
              </Box>
              <Box>
                <Button
                  variant="outline"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
