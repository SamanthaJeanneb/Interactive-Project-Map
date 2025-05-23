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

function createPopupList(items, markerIdx) {
  return '<ul>' + items.map(function(item, i) {
    return `<li class="carousel-trigger text-black hover:text-red-700 focus:text-red-700 cursor-pointer" data-marker="${markerIdx}" data-imgidx="${i}">` +
      `<b>${item.title}</b><br>${item.type}</li>`;
  }).join('') + '</ul>';
}

var markerProjects = [
  [{ title: "Police Academy Renovation", type: "Academic Building" }],
  [{ title: "Locker Room Renovation", type: "Recreational Facility/Gymnasium" }],
  [
    { title: "Grounds Relocation Facility", type: "Maintenance Building" },
    { title: "Frank Dining Hall Renovation", type: "Dining Facility" }
  ],
  [
    { title: "Off Campus Housing Facilities", type: "Housing, Residence Hall" },
    { title: "JOC Program Renovation", type: "Academic Building" },
    { title: "Kimball Halls Restroom Renovation", type: "Academic Building" }
  ],
  [{ title: "Brockport Residence Hall", type: "Housing, Residence Hall" }],
  [{ title: "Student Housing Facility", type: "Housing, Residence Hall" }],
  [{ title: "Dana Hall Site Upgrades", type: "Housing, Residence Hall" }],
  [
    { title: "Bray Hall Renovation", type: "Academic Building" },
    { title: "Post-Chlorination Facility Upgrade", type: "Maintenance Building" }
  ],
  [{ title: "Ranger School Station Renovation", type: "nan" }],
  [
    { title: "Campus Facility Assessment", type: "Academic Building" },
    { title: "Theta Beta Pi Temple Restoration", type: "Academic Building" },
    { title: "Java Barn Renovation", type: "Restaurants" },
    { title: "Herring Briefing Room", type: "Administrative/Office Building" }
  ],
  [{ title: "Chemistry Lab Renovation", type: "Academic Building" }],
  [
    { title: "Hendrick Hall Restroom Renovation", type: "Housing, Residence Hall" },
    { title: "Bowers Hall Renovation", type: "Academic Building" }
  ],
  [{ title: "Lee Hall Stair and Retaining Wall", type: "Academic Building" }],
  [{ title: "Hawkins Warehouse Renovation", type: "Warehouse/Storage Building" }],
  [
    { title: "Classroom Additions and Alterations", type: "Academic Building" },
    { title: "Electrical System Upgrade", type: "Academic Building" },
    { title: "Café Kitchen Renovation", type: "Dining Facility" }
  ],
  [{ title: "Anderson Hall Renovation", type: "Housing, Residence Hall" }],
  [
    { title: "Student Union and Athletic Renovation", type: "Recreational Facility/Gymnasium" },
    { title: "Athletic Wing Renovation", type: "Recreational Facility/Gymnasium" }
  ]
];

var markerIdx = 0;
L.marker([42.9317, -76.5661], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Cayuga Community College</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([44.6592, -74.9982], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Clarkson University</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([42.817, -75.5385], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Colgate University</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([42.4534, -76.4735], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Cornell University</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([43.2130, -77.9500], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>SUNY Brockport</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([44.0007, -75.9223], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Jefferson Community College</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([44.5913, -75.1626], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>SUNY Canton</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([43.0373, -76.1351], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>SUNY College of Environmental Science & Forestry</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([44.2224, -74.8919], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>SUNY Wanakena Campus Ranger Station</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([44.5902, -75.1642], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>St. Lawrence University</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([42.6864, -73.8238], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>State University of New York at Albany</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([42.6012, -76.1805], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>State University of New York at Cortland</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([42.457, -75.0638], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>State University of New York at Oneonta</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([43.0386, -76.134], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Syracuse University</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([42.5287, -76.3406], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Tompkins Cortland Community College</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([43.1293, -77.6283], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>University of Rochester</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);
L.marker([42.7463, -76.6961], { icon: maroonIcon }).addTo(map)
  .bindPopup(`<b>Wells College</b>${createPopupList(markerProjects[markerIdx], markerIdx++)}`);

var carouselModal = document.getElementById('carouselModal');
var carouselImg = document.getElementById('carouselImg');
var carouselCaption = document.getElementById('carouselCaption');
var carouselCounter = document.getElementById('carouselCounter');
var currentMarker = 0, currentImgIdx = 0;

function showCarousel(markerIdx, imgIdx) {
  currentMarker = markerIdx;
  currentImgIdx = imgIdx;
  var projects = markerProjects[markerIdx];
  carouselImg.src = 'placeholder.png';
  carouselCaption.textContent = projects[imgIdx].title + ' - ' + projects[imgIdx].type;
  carouselCounter.textContent = (imgIdx + 1) + ' / ' + projects.length;
  carouselModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function hideCarousel() {
  carouselModal.classList.add('hidden');
  document.body.style.overflow = '';
}
function nextImg() {
  var projects = markerProjects[currentMarker];
  currentImgIdx = (currentImgIdx + 1) % projects.length;
  showCarousel(currentMarker, currentImgIdx);
}
function prevImg() {
  var projects = markerProjects[currentMarker];
  currentImgIdx = (currentImgIdx - 1 + projects.length) % projects.length;
  showCarousel(currentMarker, currentImgIdx);
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
document.getElementById('carouselNextBtn').onclick = nextImg;
document.getElementById('carouselPrevBtn').onclick = prevImg;
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
        var imgIdx = parseInt(li.getAttribute('data-imgidx'));
        setActivePopupListItem(popup, imgIdx);
        showCarousel(markerIdx, imgIdx);
      };
    });
  }, 10);
});
