import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material";
import ComingSoon from "../../components/coming-soon/comingSoon";
import { photoGalleryData } from "../../data/photo-gallery-data";
import "./photoGallery.scss";
import { useState } from "react";

const PhotoGallery = () => {
  const [dialogOpen, setDialogOpen] = useState({
    state: false,
    img: null,
    title: "",
  });

  const handleImgClick = (src, title) => {
    console.log("img clicked");
    setDialogOpen({
      img: src,
      state: true,
      title,
    });
  };

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <main className="Photo-Gallery">
      <h1 className="heading">
        Photo <span>Gallery</span>
      </h1>
      <ImageList
        sx={{
          maxWidth: 1200,
          maxHeight: 1200,
          width: "100%",
          padding: "0.5rem",
        }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {photoGalleryData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              onClick={() => handleImgClick(item.img, item.title)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        open={dialogOpen.state}
        onClose={() => setDialogOpen({ img: null, state: false, title: "" })}
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <img src={dialogOpen.img} alt={dialogOpen.title} />
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default PhotoGallery;
