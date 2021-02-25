//fetching data
const urlParams = new URLSearchParams(window.location.search);
const area = urlParams.get('Area');

const urlArea = "Vesterbro";

const url = `https://kea2021-8b3d.restdb.io/rest/cph-explorers?q={"Area": "${urlArea}"}`;

//Fetching image link
const mediaurl = 'https://kea2021-8b3d.restdb.io/media/';

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
        handleData(data);
    })
    .catch((e) => {
        console.error("An error occured:", e.message);
    });

    function handleData(places) {
         places.forEach((place) => {
            //  console.log(place);

        document.querySelector('.article-headline').textContent = place.Area;
        document.querySelector('.short-description').textContent = place.AreaDescription;

        //grab the template
        const template = document.querySelector('template').content;

        //clone it 
        const clone = template.cloneNode(true);

        //Populate with data
        const imgurl = mediaurl + place.Image[0];
        console.log(imgurl);
        clone.querySelector('img').src= imgurl;

            clone.querySelector('.text-column>h2').textContent = place.Name; 
            clone.querySelector('.address').textContent = place.Address; 
            clone.querySelector('.description').textContent = place.Description; 
            clone.querySelector('.category>p').textContent = place.Category; 
            clone.querySelector('.category').href = `article.html?{"Category": "${place.Category}"}`;
    
        //grab parent
        const parent = document.querySelector('section.cards-place');
        //append
        parent.appendChild(clone);
         });
    }