function router() {
  const app = document.getElementById('app');
  const path = window.location.hash;
  switch (path) {
    case '#/galeria':
      app.innerHTML = '<galeria-imagenes></galeria-imagenes>';
      break;
    case '#/contacto':
      app.innerHTML = '<contacto-page></contacto-page>';
      break;
    case '#/noticias':
      app.innerHTML = '<noticias-page></noticias-page>';
      break;
    case '#/sobre-mi':
      app.innerHTML = '<sobre-mi-page></sobre-mi-page>';
      break;
    case '#/top-juegos':
      app.innerHTML = '<top-juegos-page></top-juegos-page>';
      break;
    default:
      app.innerHTML = '<home-page></home-page>';
  }
}
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
