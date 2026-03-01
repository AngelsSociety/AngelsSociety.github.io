

function initGridImage()
{   
  // 모든 image-grid 선택
const imageGrids = document.querySelectorAll('.image-grid');

console.log("check");

if (imageGrids.length > 0) {
  console.log("image grid 존재");

  imageGrids.forEach(grid => {
    grid.addEventListener('click', function (e) {
      if (e.target && e.target.matches('img.grid-image')) {
        console.log("그리드 이미지 클릭");

        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');

        if (modal && modalImg) {
          modal.style.display = "flex";
          modalImg.src = e.target.src;
        }
      }
    });
  });
}

// 모달 닫기
const closeModal = document.getElementById('close-modal');
if (closeModal) {
  closeModal.addEventListener('click', function () {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = "none";
    }
  });
}
}
  