function initCarousel() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let current = 0;
  
    if (!slides.length) return; // 캐러셀 없는 경우 무시
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
      });
      current = index;
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });
  
    setInterval(() => {
      let next = (current + 1) % slides.length;
      showSlide(next);
    }, 4000);
}