import Sanfran from "./sanfran.jpg";
function addImage() {
  const img = document.createElement("img");

  img.alt = "SanFran";
  img.width = "300";
  img.src = Sanfran;

  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
