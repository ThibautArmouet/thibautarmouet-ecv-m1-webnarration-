// IntersectionObserver (permet d'afficher ou non une classe si l'ement est visible à l'écran)

var options = {
  root: null,
  rootMargin: '0px',
  threshold: [.9, .5]
}
var body = document.querySelector('body')
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
      body.classList.add(target.parentNode.id)
      if(target.querySelector('audio[data-play="auto"]') !== null){
        target.querySelector('audio[data-play="auto"]').play()
      }
    }else{
      target.classList.remove('visible')
      body.classList.remove(target.parentNode.id)
    }
  });
}