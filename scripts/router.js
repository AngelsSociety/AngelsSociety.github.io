function loadPage(path) {
    fetch(`pages/${path}.html`)
      .then(res => {
        if (!res.ok) throw new Error(`페이지를 찾을 수 없음: ${path}`);
        return res.text();
      })
      .then(html => {
        document.getElementById('content').innerHTML = html;

        
      // 💡 여기서 캐러셀 초기화 시도
      if (path === 'about') {
        initCarousel();
      }
      })
      .catch(err => {
        console.error(err);
        document.getElementById('content').innerHTML = `<p>페이지를 불러오지 못했습니다.</p>`;
      });
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    loadPage('about'); // 첫 화면에 기본 페이지 로드
  });
  
  // 링크 클릭 시
  document.querySelectorAll("a[data-page]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      loadPage(page);
    });
  });