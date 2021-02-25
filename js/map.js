// Get DOM Elements
const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('.close');

// Events
document.querySelector('#bronshoj').addEventListener('click', openBronshojModal);
document.querySelector('#valby').addEventListener('click', openValbyModal);
document.querySelector('#vanlose').addEventListener('click', openVanloseModal);
document.querySelector('#frederiksberg').addEventListener('click', openFrederiksbergModal);
document.querySelector('#bispebjerg').addEventListener('click', openBispebjergModal);
document.querySelector('#norrebro').addEventListener('click', openNorrebroModal);
document.querySelector('#osterbro').addEventListener('click', openOsterbroModal);
document.querySelector('#vesterbro').addEventListener('click', openVesterbroModal);
document.querySelector('#amager').addEventListener('click', openAmagerModal);
document.querySelector('#indre-by').addEventListener('click', openIndreModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open areas
function openBronshojModal() {
  modal.style.display = 'block';
  document.querySelector('.map-area-name').textContent = 'Bronshøj';
  document.querySelector('.modal-body>p').textContent = 'Brønshøj-Husum is the ideal place close enough to the vibrancy of the city centre, and beautiful quiet walks in nature. Find the spot just for you among incredible parks or marshes in the area for a one of a kind outdoors experience.';
  document.querySelector('.modal-footer>a').style.display = 'none';
}

function openValbyModal() {
  modal.style.display = 'block';
  document.querySelector('.map-area-name').textContent = 'Valby';
  document.querySelector('.modal-body>p').textContent = 'Situated on the southwest borders of Copenhagen, Valby houses places like the famous Carlsberg brewery site. It’s a sprouting area of the city with lots of new construction and residential areas sprouting up.';
  document.querySelector('.modal-footer>a').style.display = 'none';
}

function openVanloseModal() {
  modal.style.display = 'block';
  document.querySelector('.map-area-name').textContent = 'Vanløse';
  document.querySelector('.modal-body>p').textContent = 'Making up one of the 10 official districts of Copenhagen, Vanløse is known as a quiet neighbourhood with beautiful walks in nature nearby in its surrounding areas.';
  document.querySelector('.modal-footer>a').style.display = 'none';
}

function openFrederiksbergModal() {
  modal.style.display = 'block';
  document.querySelector('.map-area-name').textContent = 'Frederiksberg';
  document.querySelector('.modal-body>p').textContent = 'Despite being its own separate municipality, Frederiksberg is still one of the 10 official districts that make the interesting city of Copenhagen. Characterised by it’s green spaces, the ZOO and unique dining spaces, it’s a district well worth a walk through.';
  document.querySelector('.modal-footer>a').style.display = 'inline';
  document.querySelector('.modal-footer>a').href = 'article.html?q=Frederiksberg';
}

function openBispebjergModal() {
  modal.style.display = 'block';
  document.querySelector('.map-area-name').textContent = 'Bispebjerg';
  document.querySelector('.modal-body>p').textContent = 'More commonly referred to as Nordvest, Bispebjerg offers a variety of cultural sights both indoors and outdoors, to experience any time of year.';
  document.querySelector('.modal-footer>a').style.display = 'inline';
  document.querySelector('.modal-footer>a').href = 'article.html?q=Bispebjerg';
}

function openNorrebroModal() {
  modal.style.display = 'block';
  document.querySelector('.map-area-name').textContent = 'Nørrebro';
  document.querySelector('.modal-body>p').textContent = "Nørrebro is a true culturally diverse place in Copenhagen. Creativity is alive and well in this ever-buzzing part of town. This is both the place to go for the best beer you've ever had and your new coffee place to hang out with your Danish friends";
  document.querySelector('.modal-footer>a').style.display = 'inline';
  document.querySelector('.modal-footer>a').href = 'article.html?q=Nørrebro';
}

function openOsterbroModal() {
  modal.style.display = 'block';
  document.querySelector('.map-area-name').textContent = 'Østerbro';
  document.querySelector('.modal-body>p').textContent = 'Østerbro is a family-friendly neighbourhood that hosts one of the most beautiful tourist attractions in Copenhagen. It is also one of the greenest parts, with lots of opportunities for outdoor activities.';
  document.querySelector('.modal-footer>a').style.display = 'inline';
  document.querySelector('.modal-footer>a').href = 'article.html?q=Østerbro';
}

function openVesterbroModal() {
  modal.style.display = 'block';
  document.querySelector('.map-area-name').textContent = 'Vesterbro';
  document.querySelector('.modal-body>p').textContent = 'Vesterbro is one of the most vibrant parts of the city. It offers a variety of entertaining opportunities for adults and children alike.';
  document.querySelector('.modal-footer>a').style.display = 'inline';
  document.querySelector('.modal-footer>a').href = 'article.html?q=Vesterbro';
}

function openAmagerModal() {
  modal.style.display = 'block';
  document.querySelector('.map-area-name').textContent = 'Amager';
  document.querySelector('.modal-body>p').textContent = 'Holding the title as Denmark’s most densely populated Island, Amager is home to the ‘extension of Copenhagen’ called Ørestad, and has some of the best quality shopping that Denmark has to offer, as well as rich nature and gorgeous beaches.';
  document.querySelector('.modal-footer>a').style.display = 'inline';
  document.querySelector('.modal-footer>a').href = 'article.html?q=Amager';
}

function openIndreModal() {
  modal.style.display = 'block';
  document.querySelector('.map-area-name').textContent = 'Indre By';
  document.querySelector('.modal-body>p').textContent = 'Indre by is a real treasure of culture, history and entertainment. There are historic buildings, church spires and narrow streets, that are able to impress even the toughest critics out there.';
  document.querySelector('.modal-footer>a').style.display = 'inline';
  document.querySelector('.modal-footer>a').href = 'article.html?q=Indre By';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
