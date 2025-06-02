var map = L.map('mapid').setView([42.9, -75.0], 7);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
}).addTo(map);

var maroonIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const markerProjects = new Map([
  [0, [{ title: "Police Academy Renovation", type: "Academic Building" }]],
  [1, [{ title: "Locker Room Renovation", type: "Recreational Facility/Gymnasium" }]],
  [2, [
    { title: "Grounds Relocation Facility", type: "Maintenance Building" },
    { title: "Frank Dining Hall Renovation", type: "Dining Facility" }
  ]],
  [3, [
    { title: "Off Campus Housing Facilities", type: "Housing, Residence Hall" },
    { title: "JOC Program Renovation", type: "Academic Building" },
    { title: "Kimball Halls Restroom Renovation", type: "Academic Building" }
  ]],
  [4, [{ title: "Brockport Residence Hall", type: "Housing, Residence Hall" }]],
  [5, [{ title: "Student Housing Facility", type: "Housing, Residence Hall" }]],
  [6, [{ title: "Dana Hall Site Upgrades", type: "Housing, Residence Hall" }]],
  [7, [
    { title: "Bray Hall Renovation", type: "Academic Building" },
    { title: "Post-Chlorination Facility Upgrade", type: "Maintenance Building" }
  ]],
  [8, [{ title: "Ranger School Station Renovation", type: "nan" }]],
  [9, [
    { title: "Campus Facility Assessment", type: "Academic Building" },
    { title: "Theta Beta Pi Temple Restoration", type: "Academic Building" },
    { title: "Java Barn Renovation", type: "Restaurants" },
    { title: "Herring Briefing Room", type: "Administrative/Office Building" }
  ]],
  [10, [{ title: "Chemistry Lab Renovation", type: "Academic Building" }]],
  [11, [
    { title: "Hendrick Hall Restroom Renovation", type: "Housing, Residence Hall" },
    { title: "Bowers Hall Renovation", type: "Academic Building" }
  ]],
  [12, [{ title: "Lee Hall Stair and Retaining Wall", type: "Academic Building" }]],
  [13, [{ title: "Hawkins Warehouse Renovation", type: "Warehouse/Storage Building" }]],
  [14, [
    { title: "Classroom Additions and Alterations", type: "Academic Building" },
    { title: "Electrical System Upgrade", type: "Academic Building" },
    { title: "Café Kitchen Renovation", type: "Dining Facility" }
  ]],
  [15, [{ title: "Anderson Hall Renovation", type: "Housing, Residence Hall" }]],
  [16, [
    { title: "Student Union and Athletic Renovation", type: "Recreational Facility/Gymnasium" },
    { title: "Athletic Wing Renovation", type: "Recreational Facility/Gymnasium" }
  ]]
]);

function createPopupList(items, markerIdx) {
  return '<ul>' + items.map(function(item, i) {
    return `<li class="carousel-trigger text-black hover:text-red-700 focus:text-red-700 cursor-pointer" data-marker="${markerIdx}" data-imgidx="${i}">` +
      `<b>${item.title}</b><br>${item.type}</li>`;
  }).join('') + '</ul>';
}

var markerIdx = 0;
L.marker([42.9317, -76.5661], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Cayuga Community College</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([44.6592, -74.9982], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Clarkson University</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([42.817, -75.5385], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Colgate University</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([42.4534, -76.4735], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Cornell University</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([43.2130, -77.9500], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>SUNY Brockport</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([44.0007, -75.9223], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Jefferson Community College</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([44.5913, -75.1626], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>SUNY Canton</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([43.0373, -76.1351], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>SUNY College of Environmental Science & Forestry</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([44.2224, -74.8919], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>SUNY Wanakena Campus Ranger Station</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([44.5902, -75.1642], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>St. Lawrence University</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([42.6864, -73.8238], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>State University of New York at Albany</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([42.6012, -76.1805], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>State University of New York at Cortland</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([42.457, -75.0638], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>State University of New York at Oneonta</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([43.0386, -76.134], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Syracuse University</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([42.5287, -76.3406], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Tompkins Cortland Community College</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([43.1293, -77.6283], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>University of Rochester</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);
L.marker([42.7463, -76.6961], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Wells College</b>${createPopupList(markerProjects.get(markerIdx), markerIdx++)}`);

var carouselModal = document.getElementById('carouselModal');
var carouselCaption = document.getElementById('carouselCaption');
var currentMarker = 0, currentProjectIdx = 0, currentImgIdx = 0;

const imageMap = {
  0: ['PoliceAcademy1.jpg', 'PoliceAcademy2.jpg'],
  1: [], 
  2: ['Colgate_Bldgs1.jpg', 'ColgateFrankDiningHall1.jpg', 'ColgateFrankDiningHall2.jpg', 'ColgateFrankDiningHall3.jpg'],
  3: [], 
  4: [], 
  5: [], 
  6: ['CantonDanaHall.jpg'], 
  7: ['ESFWanakenaRanger1.jpg', 'ESFWanakenaRanger2.jpg'],
  8: ['ESFWanakenaRanger1.jpg'], 
  9: [],
  10: [], 
  11: ['CortlandBowersHall.JPG'], 
  12: [], 
  13: [],
  14: ['TCCClassroomAdd.JPG'], 
  15: ['AndersonHall1.jpg', 'AndersonHall2.jpg'],
  16: [] 
};

const imageProjectMap = {
  0: [0, 0],
  1: [], 
  2: [0, 1, 1, 1],
  3: [], 
  4: [], 
  5: [], 
  6: [0], 
  7: [0, 1],
  8: [0], 
  9: [], 
  10: [], 
  11: [1], 
  12: [], 
  13: [], 
  14: [0], 
  15: [0, 0], 
  16: []
};

function createCarouselSlides(markerIdx) {
  const images = imageMap[markerIdx] || [];
  const projects = markerProjects.get(markerIdx) || [];
  const projectIndices = imageProjectMap[markerIdx] || [];
  const carouselList = document.querySelector('#carouselModal .carousel__list');
  carouselList.innerHTML = '';

  images.forEach((img, i) => {
    const li = document.createElement('li');
    li.className = 'carousel__item';
    li.setAttribute('data-pos', i - 0);
    const projectIdx = projectIndices[i] !== undefined ? projectIndices[i] : 0;
    const imgSrc = img ? `Images/${img}` : 'placeholder.png';
    li.innerHTML = `<img src="${imgSrc}" alt="${projects[projectIdx]?.title || 'Project Image'}" style="width:400px;height:300px;object-fit:cover;" onerror="this.onerror=null;this.src='placeholder.png';" />`;
    li.onclick = function() { updateCarouselPos(i); };
    carouselList.appendChild(li);
  });

  if (images.length === 0) {
    const li = document.createElement('li');
    li.className = 'carousel__item';
    li.setAttribute('data-pos', 0);
    li.innerHTML = `<img src="placeholder.png" alt="No Image" style="width:400px;height:300px;object-fit:cover;" />`;
    carouselList.appendChild(li);
  }
  carouselList.dataset.imgToProjectIdx = JSON.stringify(projectIndices);

  updateCarouselCaption(markerIdx, projectIndices[0] ?? 0);
}

function updateCarouselPos(activeIdx) {
  const carouselItems = document.querySelectorAll('.carousel__item');
  const total = carouselItems.length;
  carouselItems.forEach((item, i) => {
    let pos = i - activeIdx;
    if (pos < -2) pos = pos + total;
    if (pos > 2) pos = pos - total;
    item.setAttribute('data-pos', pos);
  });

  const carouselList = document.querySelector('#carouselModal .carousel__list');
  const imgToProjectIdx = JSON.parse(carouselList.dataset.imgToProjectIdx || '[]');
  updateCarouselCaption(currentMarker, imgToProjectIdx[activeIdx] ?? 0);
}

function updateCarouselCaption(markerIdx, projectIdx) {
  const projects = markerProjects.get(markerIdx) || [];
  let caption = '';
  if (projects && projects[projectIdx]) {
    caption = `<div><b>${projects[projectIdx].title}</b>${projects[projectIdx].type ? ' - ' + projects[projectIdx].type : ''}</div>`;
  }
  carouselCaption.innerHTML = caption;
}

function showCarousel(markerIdx, projectIdx, imgIdx = 0) {
  currentMarker = markerIdx;
  currentProjectIdx = projectIdx;
  createCarouselSlides(markerIdx);
  updateCarouselPos(imgIdx);
  carouselModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function hideCarousel() {
  carouselModal.classList.add('hidden');
  document.body.style.overflow = '';
}

function setActivePopupListItem(popup, imgIdx) {
  var triggers = popup.getElement().querySelectorAll('.carousel-trigger');
  triggers.forEach(function(li, idx) {
    if (idx === imgIdx) {
      li.classList.add('text-red-700');
    } else {
      li.classList.remove('text-red-700');
    }
  });
}

document.getElementById('carouselCloseBtn').onclick = hideCarousel;
carouselModal.addEventListener('click', function(e) {
  if (e.target === carouselModal) hideCarousel();
});

map.on('popupopen', function(e) {
  var popup = e.popup;
  setTimeout(function() {
    var triggers = popup.getElement().querySelectorAll('.carousel-trigger');
    triggers.forEach(function(li) {
      li.onclick = function(ev) {
        var markerIdx = parseInt(li.getAttribute('data-marker'));
        var projectIdx = parseInt(li.getAttribute('data-imgidx'));
        setActivePopupListItem(popup, projectIdx);
        showCarousel(markerIdx, projectIdx);
      };
    });
  }, 10);
});
