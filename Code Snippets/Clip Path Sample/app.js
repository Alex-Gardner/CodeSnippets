var clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", function (evt) {
  document.getElementById("clipped").style.clipPath = evt.target.value;
});
