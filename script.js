const input = document.querySelector(".link-input");
const generateBtn = document.querySelector(".generate-btn");
const qrCode = document.getElementById("qrCode");

const qrcode = new QRCode(document.getElementById("qrCode"), {
  text: "https://www.frontendmentor.io/home",
  width: 200,
  height: 200,
  colorDark: "#ffffff",
  colorLight: "#5176f1",
  correctLevel: QRCode.CorrectLevel.H,
});

generateBtn.addEventListener("click", () => {
  const url = input.value;

  if (url) {
    qrcode.makeCode(url);
  } else {
    qrcode.clear();
    qrcode.makeCode("https://www.frontendmentor.io/home");
  }
});
