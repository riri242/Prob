let cropper;

const upload = document.getElementById("upload");
const cropImg = document.getElementById("cropImage");
const finalImage = document.getElementById("finalImage");

/* Upload */
upload.onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);

  cropImg.src = url;
  cropImg.style.display = "block";

  if (cropper) cropper.destroy();

  cropper = new Cropper(cropImg, {
    aspectRatio: 4 / 5,
    viewMode: 1,

    /* 🔥 أهم جزء: تحديث تلقائي */
    crop() {
      updatePreview();
    }
  });

  // أول عرض
  setTimeout(updatePreview, 200);
};

/* تحديث مباشر */
function updatePreview() {
  if (!cropper) return;

  const canvas = cropper.getCroppedCanvas({
    width: 1080,
    height: 1350
  });

  finalImage.src = canvas.toDataURL("image/png");
}

/* تحميل */
function download() {
  if (!finalImage.src) return;

  const link = document.createElement("a");
  link.download = "ip-event.png";
  link.href = finalImage.src;
  link.click();
}