//fetching data
const urlParams = new URLSearchParams(window.location.search);
const areaParam = urlParams.get('Area');

const url = `https://kea2021-8b3d.restdb.io/rest/cph-explorers?h={"$groupby":["Area"]}`;

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

    function handleData(areas) {
    areas.forEach((area) => {
      console.log(area);

       //grab the template
       const template = document.querySelector('template').content;

       //clone it 
       const clone = template.cloneNode(true);

       //Populate with data
        const imgurl = mediaurl + area.AreaIcon[0];
        console.log(imgurl);
        clone.querySelector('.area-image').src= imgurl;

           clone.querySelector('.area-name').textContent = area.Area; 
           clone.querySelector('.article-link').href = `article.html?q={"Area": "${area.Area}"}`;
   
       //grab parent
       const parent = document.querySelector('section.area-list-section');
       //append
       parent.appendChild(clone);
        });
   }