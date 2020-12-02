// Exemple d'un evenment controlant une classe

let btn = document.querySelector('.pane span');
let pane = document.querySelector('.pane')

btn.addEventListener('click', function(){
  pane.classList.toggle('close')
})

// IntersectionObserver (permet d'afficher ou non une classe si l'ement est visible à l'écran)

var options = {
  root: null,
  rootMargin: '0px',
  threshold: [.9, .5]
}
var observer = new IntersectionObserver(callback, options);
var targets = document.querySelectorAll('article');
targets.forEach((article, i) => {
  observer.observe(article);
});
function callback(entries, observer){
  entries.forEach((entry,i) => {
    let target = entry.target
    if(entry.intersectionRatio > .5){
      target.classList.add('visible')
    }else{
      target.classList.remove('visible')
    }
  });
}
