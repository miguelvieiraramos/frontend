const carouselElement = document.querySelector('.carousel');
const nextButtonElement = document.querySelector('.carousel__button--next');
const prevButtonElement = document.querySelector('.carousel__button--prev');
const imagesElements = document.querySelectorAll('.carousel__photo');


nextButtonElement.addEventListener('click', () => {
  imagesElements.forEach(imageElement  => {
    if(imageElement.classList.contains('initial')) {
      imageElement.classList.replace('initial', 'prev')
    } else if(imageElement.classList.contains('next')) {
      imageElement.classList.replace('next', 'initial')
    } else if(imageElement.classList.contains('prev')) {
      imageElement.classList.replace('prev', 'next')
    }
  })
})

prevButtonElement.addEventListener('click', () => {
  imagesElements.forEach(imageElement  => {
    if(imageElement.classList.contains('initial')) {
      imageElement.classList.replace('initial', 'next')
    } else if(imageElement.classList.contains('prev')) {
      imageElement.classList.replace('prev', 'initial')
    } else if(imageElement.classList.contains('next')) {
      imageElement.classList.replace('next', 'prev')
    }
  })
})


function getTransformValues() {
  const transform = getComputedStyle(carouselElement, null).getPropertyValue('transform');
  return transform.match(/-?[\d\.]+/g);
}

