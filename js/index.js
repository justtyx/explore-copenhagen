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

//fetching data
const url = "https://kea2021-8b3d.restdb.io/rest/cph-explorers?max=51";
//const mediaurl = 'https://kea2021-8b3d.restdb.io/rest/cph-explorers?max=51';
//key
const options = {
    headers: {
        'x-apikey': "603519b75ad3610fb5bb6580",
    },
};

fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then ((data) => {
        // console.log(data);
        handleData(data);
    })
    .catch((e) => {
        console.error("An error occured:", e.message);
    });

    function handleData(places) {
        places.forEach((place) => {
            console.log(place);

            //grab the template
            //const template = document.querySelector('template').content;
            //clone it 
            //const clone = template.cloneNode(true);

            //Populate with data
            //const imgurl = mediaurl + place.Image[0];
            //console.log(imgurl);
            //clone.querySelector('img').src= imgurl;

            // clone.querySelector('.name').textContent = place.Alias; 
            // clone.querySelector('.mission').textContent = place.Mission; 
            // if (place.Cape) {
            // clone.querySelector('.cape').textContent = `${place.Alias} wears a cape`;  
            // } else {
            // clone.querySelector('.cape').style.display = 'none';  

            // }
            // clone.querySelector('img').textContent = place.mission; 

            //grab parent
            //const parent = document.querySelector('.placees-cont');
            //append
           // parent.appendChild(clone);
        });
    }

//map descriptions
