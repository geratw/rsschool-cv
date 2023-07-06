const navLinks = document.querySelectorAll('.nav__item a');

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

    // Создаем временный элемент textarea для копирования текста
    var textarea = document.createElement("textarea");
    textarea.value = codeText;
    document.body.appendChild(textarea);

    // Выделяем текст внутри textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Для мобильных устройств

    // Копируем выделенный текст в буфер обмена
    document.execCommand("copy");

    // Удаляем временный элемент textarea
    document.body.removeChild(textarea);

    // Изменяем текст кнопки на "Скопировано!"
    var copyButton = document.querySelector(".btn");
    copyButton.innerText = "Copied!";
}
