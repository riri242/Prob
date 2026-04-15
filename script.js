let cropper;

const upload = document.getElementById("upload");
const cropImage = document.getElementById("cropImage");

const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");

const outTitle = document.getElementById("outTitle");
const outDesc = document.getElementById("outDesc");

const finalImage = document.getElementById("finalImage");

/* Upload + Crop */
upload.onchange = (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);

  cropImage.src = url;

  if (cropper) cropper.destroy();

  cropper = new Cropper(cropImage, {
    aspectRatio: 4 / 5,
    viewMode: 1,
  });
};

/* Apply crop */
function cropImage() {
  const canvas = cropper.getCroppedCanvas({
    width: 1080,
    height: 1350
  });

  finalImage.src = canvas.toDataURL();
}

/* Text binding */
titleInput.oninput = () => {
  outTitle.innerText = titleInput.value;
};

descInput.oninput = () => {
  outDesc.innerText = descInput.value;
};

/* Download */
function download() {
  html2canvas(document.getElementById("canvas"), {
    scale: 3
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "post.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}