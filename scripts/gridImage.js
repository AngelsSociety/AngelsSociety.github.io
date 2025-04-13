

function initGridImage()
{   
  // image-grid가 존재하는지 확인한 후, 존재하면 이벤트 리스너 추가
  const imageGrid = document.querySelector('.image-grid');
  console.log("check");
  if (imageGrid) {  // image-grid가 존재하는 경우에만
      console.log("image grid 존재");
    imageGrid.addEventListener('click', function(e) {
      if (e.target && e.target.matches('img.grid-image')) {
        console.log("그리드 이미지 클릭");
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = "flex";  // 모달 창 보이기
        modalImg.src = e.target.src;  // 클릭한 이미지 src를 모달에 표시
      }
    });
  }

  // 모달 닫기 버튼 클릭 시 모달 닫기
  const closeModal = document.getElementById('close-modal');
  if (closeModal) {  // close-modal이 존재하는 경우에만
    closeModal.addEventListener('click', function() {
      const modal = document.getElementById('modal');
      modal.style.display = "none";  // 모달 창 닫기
    });
  }
}
  