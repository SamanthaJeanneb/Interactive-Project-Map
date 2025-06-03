var map = L.map('mapid', {
  closePopupOnClick: false
}).setView([42.9, -75.0], 7);

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

let markerProjects = new Map();
let imageMap = {};
let imageProjectMap = {};
let markerCoordinates = new Map();

fetch('/HigherEdData.csv')
  .then(res => res.text())
  .then(csvText => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        let data = results.data;

        data.forEach(row => {
          const markerIdx = parseInt(row.markerIdx);
          if (!markerProjects.has(markerIdx)) {
            markerProjects.set(markerIdx, []);
            markerCoordinates.set(markerIdx, {
              lat: parseFloat(row.lat),
              lng: parseFloat(row.lng),
              school: row.school
            });
            imageMap[markerIdx] = [];
            imageProjectMap[markerIdx] = [];
          }

          const project = {
            title: row.title,
            type: row.type
          };
          const imgList = row.imageNames ? row.imageNames.split(';').filter(x => x.trim()) : [];

          const projectIdx = markerProjects.get(markerIdx).length;
          markerProjects.get(markerIdx).push(project);

          imgList.forEach(img => {
            imageMap[markerIdx].push(img);
            imageProjectMap[markerIdx].push(projectIdx);
          });
        });

        let idx = 0;
        for (const [markerIdx, coords] of markerCoordinates.entries()) {
          L.marker([coords.lat, coords.lng], { icon: maroonIcon }).addTo(map)
            .bindPopup(`<b>${coords.school}</b>${createPopupList(markerProjects.get(markerIdx), idx)}`);
          idx++;
        }
      }
    });
  });

function createPopupList(items, markerIdx) {
  return '<ul>' + items.map((item, i) =>
    `<li class="carousel-trigger text-black hover:text-red-700 focus:text-red-700 cursor-pointer" data-marker="${markerIdx}" data-imgidx="${i}">
      <b>${item.title}</b><br>${item.type}
    </li>`
  ).join('') + '</ul>';
}


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

  const images = imageMap[markerIdx] || [];
  const projects = markerProjects.get(markerIdx) || [];
  const projectIndices = imageProjectMap[markerIdx] || [];

  const filteredImageIndices = [];
  for (let i = 0; i < projectIndices.length; i++) {
    if (projectIndices[i] === projectIdx) filteredImageIndices.push(i);
  }

  let filteredImages, filteredProjectIndices;
  if (filteredImageIndices.length > 0) {
    filteredImages = filteredImageIndices.map(i => images[i]);
    filteredProjectIndices = filteredImageIndices.map(() => projectIdx);
  } else {
    filteredImages = [];
    filteredProjectIndices = [];
  }

  function createCarouselSlidesSingleProject() {
    const carouselList = document.querySelector('#carouselModal .carousel__list');
    carouselList.innerHTML = '';

    filteredImages.forEach((img, i) => {
      const li = document.createElement('li');
      li.className = 'carousel__item';
      li.setAttribute('data-pos', i - 0);
      const imgSrc = img ? `Images/${img}` : 'placeholder.png';
      li.innerHTML = `<img src="${imgSrc}" alt="${projects[projectIdx]?.title || 'Project Image'}" style="width:400px;height:300px;object-fit:cover;" onerror="this.onerror=null;this.src='placeholder.png';" />`;
      li.onclick = function() { updateCarouselPos(i); };
      carouselList.appendChild(li);
    });

    if (filteredImages.length === 0) {
      const li = document.createElement('li');
      li.className = 'carousel__item';
      li.setAttribute('data-pos', 0);
      li.innerHTML = `<img src="placeholder.png" alt="No Image" style="width:400px;height:300px;object-fit:cover;" />`;
      carouselList.appendChild(li);
    }

    carouselList.dataset.imgToProjectIdx = JSON.stringify(filteredProjectIndices);

    updateCarouselCaption(markerIdx, filteredProjectIndices[0] ?? projectIdx);

  }

  createCarouselSlidesSingleProject();
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

function getActiveCarouselIdx() {
  const items = document.querySelectorAll('.carousel__item');
  for (let i = 0; i < items.length; i++) {
    if (items[i].getAttribute('data-pos') == 0) return i;
  }
  return 0;
}

function nextCarousel() {
  const items = document.querySelectorAll('.carousel__item');
  if (items.length <= 1) return;
  let idx = getActiveCarouselIdx();
  idx = (idx + 1) % items.length;
  updateCarouselPos(idx);
}
function prevCarousel() {
  const items = document.querySelectorAll('.carousel__item');
  if (items.length <= 1) return;
  let idx = getActiveCarouselIdx();
  idx = (idx - 1 + items.length) % items.length;
  updateCarouselPos(idx);
}

carouselModal.addEventListener('wheel', function(e) {
  if (carouselModal.classList.contains('hidden')) return;
  if (e.deltaY > 0) {
    nextCarousel();
  } else if (e.deltaY < 0) {
    prevCarousel();
  }
  e.preventDefault();
}, { passive: false });

let touchStartX = null;
carouselModal.addEventListener('touchstart', function(e) {
  if (e.touches.length === 1) {
    touchStartX = e.touches[0].clientX;
  }
});
carouselModal.addEventListener('touchend', function(e) {
  if (touchStartX === null) return;
  const touchEndX = e.changedTouches[0].clientX;
  const dx = touchEndX - touchStartX;
  if (Math.abs(dx) > 40) {
    if (dx < 0) nextCarousel();
    else prevCarousel();
  }
  touchStartX = null;
});

carouselModal.addEventListener('keydown', function(e) {
  if (carouselModal.classList.contains('hidden')) return;
  if (e.key === 'ArrowLeft') prevCarousel();
  if (e.key === 'ArrowRight') nextCarousel();
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
