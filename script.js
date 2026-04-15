const upload = document.getElementById("upload");

const uploadScreen = document.getElementById("uploadScreen");
const editorScreen = document.getElementById("editorScreen");

const finalImage = document.getElementById("finalImage");
const canvas = document.getElementById("canvas");

/* رفع الصورة */
upload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);

  // حط الصورة
  finalImage.src = url;

  // 🔥 التبديل بين الشاشات
  uploadScreen.classList.add("hidden");
  editorScreen.classList.remove("hidden");
});

/* تحميل الصورة */
function downloadImage() {
  if (!finalImage.src) return;

  html2canvas(canvas, {
    useCORS: true,
    scale: 2
  }).then((canvasEl) => {
    const link = document.createElement("a");
    link.download = "techprotok.png";
    link.href = canvasEl.toDataURL("image/png");
    link.click();
  });
}