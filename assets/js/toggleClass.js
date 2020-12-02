document.querySelectorAll('[data-target]').forEach((item, i) => {
  item.addEventListener('click', (elem) => {
    let target = elem.target.getAttribute('data-target')
    document.querySelectorAll(target).forEach((item, i) => {
      item.classList.toggle('open')
    });
  })
});
