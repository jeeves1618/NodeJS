const filePickerElement = document.getElementById("image");
const imagePreviewElement = document.getElementById("image-preview");
console.log("Is it at all invoked?");
function showPreview() {
  console.log("show preview");
  let file = filePickerElement.files;
  if (!file || file.length === 0) {
    imagePreviewElement.style.display = "none";
    return;
  }

  const pickedFile = file[0];
  imagePreviewElement.src = URL.createObjectURL(pickedFile);
  imagePreviewElement.style.display = "block";
}

filePickerElement.addEventListener("change", showPreview);
