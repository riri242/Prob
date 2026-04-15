const upload = document.getElementById("upload");
const finalImage = document.getElementById("finalImage");
const canvas = document.getElementById("canvas");

/* رفع الصورة */
upload.onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  finalImage.src = url;
};

/* تحميل الصورة (FIXED) */
function downloadImage() {
  if (!finalImage.src) return alert("ارفع صورة أولاً");

  html2canvas(canvas, {
    useCORS: true,
    scale: 2
  }).then((canvasEl) => {
    const link = document.createElement("a");
    link.download = "ip-event.png";
    link.href = canvasEl.toDataURL("image/png");
    link.click();
  });
}