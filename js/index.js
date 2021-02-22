const category = document.getElementById('category-btn');
const area = document.getElementById('area-btn');
const map = document.getElementById('lnd-map');
const categorySection = document.getElementById('lnd-cat');

category.addEventListener('click', showCategory);
area.addEventListener('click', showArea);

function showCategory() {
categorySection.classList.remove('hidden');
map.classList.add('hidden');
category.classList.remove('unselected');
category.classList.add('selected');
area.classList.add('unselected');
area.classList.remove('selected');
}

function showArea() {
    categorySection.classList.add('hidden');
    map.classList.remove('hidden');
    category.classList.add('unselected');
    category.classList.remove('selected');
    area.classList.remove('unselected');
    area.classList.add('selected');
}