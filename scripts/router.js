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
      if(path === 'donations' || path === 'programs'){
        initGridImage();
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

  // 모든 링크 클릭 시
  document.body.addEventListener('click', (e) => {
    // nav에서 클릭된 경우
    if (e.target && e.target.matches("nav a[data-page]")) {
      e.preventDefault();
      const page = e.target.getAttribute("data-page");
      loadPage(page);
    }
  
    // #content 내에서 클릭된 경우 (동적으로 로드된 링크)
    if (e.target && e.target.matches("#content a[data-page]")) {
      e.preventDefault();
      const page = e.target.getAttribute("data-page");
      loadPage(page);
    }
  });
  