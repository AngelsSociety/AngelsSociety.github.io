function loadPage(path) {
    fetch(`pages/${path}.html`)
      .then(res => {
        if (!res.ok) throw new Error(`페이지를 찾을 수 없음: ${path}`);
        return res.text();
      })
      .then(html => {
        document.getElementById('content').innerHTML = html;
        console.log(path + " open");
        
      // 💡 여기서 캐러셀 초기화 시도
      if (path === 'about') {
        initCarousel();
        initGridImage();
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
    // 로고 클릭 시 (로고 자체에 직접 이벤트 리스너 추가)
    const logo = document.querySelector(".logo");
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();  // 기본 동작인 페이지 이동을 막음
        const page = logo.getAttribute("data-page");
        loadPage(page);  // `data-page`에 맞는 페이지 로드
      });
    }
    
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // 햄버거 메뉴 클릭 시 nav ul의 show 클래스 토글
    menuToggle.addEventListener('click', function () {
      console.log("햄버거클릭됨");
      menu.classList.toggle('show');
    });
    loadPage('about'); // 첫 화면에 기본 페이지 로드
  });

  // 모든 링크 클릭 시
  document.body.addEventListener('click', (e) => {
    // nav에서 클릭된 경우
    if (e.target && e.target.matches("nav a[data-page]")) {
      console.log("nav 클릭");
      e.preventDefault();
      const page = e.target.getAttribute("data-page");
      loadPage(page);
    }
  
    // #content 내에서 클릭된 경우 (동적으로 로드된 링크)
    else if (e.target && e.target.matches("#content a[data-page]")) {
      e.preventDefault();
      const page = e.target.getAttribute("data-page");
      loadPage(page);
    }
  });
  