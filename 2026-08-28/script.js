let links = document.querySelectorAll('.popup-link');
let articles = document.querySelectorAll('article');
let popupWindow = document.getElementById('popup');
let popup = document.getElementById('popup-image');

links.forEach(link => {
  link.addEventListener('click', function (event) {


    if (event.explicitOriginalTarget.attributes.href.value === "#") {

      event.preventDefault();
      // get information from the clicked link
      // travel up the DOM tree to find the parent article
      let article = event.target.closest('article');

      let popupInfo = article.querySelector('.popup-info').innerHTML;
      document.getElementById('popup-text').innerHTML = popupInfo;

      popupWindow.style.left = Math.random() * 200 + 'px';
      popupWindow.style.top = Math.random() * 200 + 'px';
      popupWindow.style.display = 'block';
    }

  })


});


// close button
let closeButton = document.getElementById('popup-dots').lastElementChild;
closeButton.addEventListener('click', function () {
  popupWindow.style.display = 'none';
});




// native HTML5 drag events report clientX/Y as 0, so use mouse events instead for live dragging
let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;
let popupBar = document.getElementById('popup-bar');

popupBar.addEventListener('mousedown', function (event) {
  isDragging = true;
  dragOffsetX = event.clientX - popupWindow.offsetLeft;
  dragOffsetY = event.clientY - popupWindow.offsetTop;
});

document.addEventListener('mousemove', function (event) {
  if (!isDragging) return;

  let newPosX = event.clientX - dragOffsetX;
  let newPosY = event.clientY - dragOffsetY;

  popupWindow.style.left = newPosX + 'px';
  popupWindow.style.top = newPosY + 'px';
});

document.addEventListener('mouseup', function () {
  isDragging = false;
});