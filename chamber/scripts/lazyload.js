const images = document.querySelectorAll('img[data-src]');

const imgOptions = {
  rootMargin: "0px",
  threshold: 1
};

const preLoadImage = image => {
    image.classList.add('fade-in');
    image.src = image.dataset.src;
    image.srcset = image.dataset.srcset;
}

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach(item => {
            if (item.isIntersecting) {
                preLoadImage(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    images.forEach(image => imgObserver.observe(image));
}else {
    console.log('%cIntersection Observers not supported', 'color: red');
    images.forEach(image => preLoadImage(image));
}


    
