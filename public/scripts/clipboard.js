function copy(content) {
  let copyText = document.querySelector(content);
  copyText.select();
  document.execCommand("copy");
}
