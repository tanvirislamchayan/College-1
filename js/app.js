// loader
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    console.log('loading')
    if (loader.classList.contains('d-none')) {
        loader.classList.remove('d-none');
    }
});

window.addEventListener('load', () => {  // corrected 'Load' to 'load'
    const loader = document.getElementById('loader');
    console.log('loaded')
    if (!loader.classList.contains('d-none')) {
        loader.classList.add('d-none');
    }
});


document.addEventListener('DOMContentLoaded', ()=> {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    // notice downloader
    const noticeImg = document.getElementById('notice-img');
    const imgUrl = noticeImg.src;

    noticeImg.addEventListener('click', ()=> {
        const link = document.createElement('a');
        link.href = imgUrl;
        link.target = '_blank';
        link.download = imgUrl.split('/').pop();
        link.click();
    });
});



// owl 
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});