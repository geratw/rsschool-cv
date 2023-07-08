const navLinks = document.querySelectorAll('.nav-item a');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPos = targetElement.offsetTop;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  });
});

function copyCode() {
    var codeElement = document.querySelector(".code-window code");
    var codeText = codeElement.innerText;

    var textarea = document.createElement("textarea");
    textarea.value = codeText;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999); 

    document.execCommand("copy");

    document.body.removeChild(textarea);

    var copyButton = document.querySelector(".btn");
    copyButton.innerText = "Copied!";
}

