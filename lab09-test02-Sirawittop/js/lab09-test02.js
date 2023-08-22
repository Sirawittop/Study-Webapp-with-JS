const photos = JSON.parse(content);

/* put your code after this */
const parentSection = document.getElementById('parent');
const figure = parentSection.querySelector('figure');
const figcaption = figure.querySelector('figcaption');
const colorSpans = figcaption.querySelectorAll('span');
const photoColors = photos[0].colors;

for (let photoIndex = 0; photoIndex < 4; photoIndex++) {
    colorSpans[photoIndex].style.backgroundColor = photoColors[photoIndex].hex
    
}

for (let photoIndex = 1; photoIndex < 3; photoIndex++) {

const photo = photos[photoIndex];

const figure = document.createElement('figure');

const img = document.createElement('img');
img.src = 'images/' + photo.filename;
img.alt = photo.title;

const figcaption = document.createElement('figcaption');

const h2 = document.createElement('h2');
h2.textContent = photo.title;

const p = document.createElement('p');
p.textContent = photo.description;

figcaption.appendChild(h2);
figcaption.appendChild(p);

figure.appendChild(img);
figure.appendChild(figcaption);

parentSection.appendChild(figure);

photo.colors.forEach(color => {
  const colorSpan = document.createElement('span');
  colorSpan.style.backgroundColor = color.hex;
  figcaption.appendChild(colorSpan);
});

}
