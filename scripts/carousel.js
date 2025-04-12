
  /* 모바일 메뉴 토글 */
  const btn=document.getElementById('menu-toggle');
  const menu=document.getElementById('menu');
  btn.addEventListener('click',()=>menu.classList.toggle('show'));

  /* 캐러셀 */
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

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
  }, 4000); // 4초마다 자동 슬라이드