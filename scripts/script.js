function smoothScroll(event, target) {
  event.preventDefault();
  const element = document.querySelector(target);
  window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
  });
}

function copyCode() {
    var codeElement = document.querySelector(".code-window code");
    var codeText = codeElement.innerText;

    var textarea = document.createElement("textarea");
    textarea.value = codeText;
    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");
    document.body.removeChild(textarea);

    var copyButton = document.querySelector(".btn");
    copyButton.innerText = "Copied!";
}
