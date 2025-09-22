// 다크모드 토글 함수
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. 다크 모드 테마 확인
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // ------------------- dog.html 전용: 이미지 확대 모달 기능 -------------------
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('expanded-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close-btn')[0];
    const downloadBtn = document.getElementById('download-btn');

    // 갤러리 아이템 클릭 시
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block'; // 모달 열기
            modalImg.src = this.src; // 클릭된 이미지로 모달 이미지 설정

            // 다운로드 버튼 링크 설정
            downloadBtn.href = this.src;
            // 파일명 설정 (원본 파일명을 유지)
            downloadBtn.setAttribute('download', this.src.split('/').pop()); 

            // 캡션이 없으면 캡션 영역 숨기기
            if (this.alt && this.alt !== 'undefined' && this.alt !== '') {
                captionText.style.display = 'block';
            } else {
                captionText.style.display = 'none';
            }
        });
    });

    // 닫기 버튼 클릭 시
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none'; // 모달 닫기
        });
    }

    // 모달 바깥 영역 클릭 시 닫기
    if (modal) {
        modal.addEventListener('click', (event) => {
            // 모달 이미지나 캡션, 버튼을 클릭한 것이 아니라면 닫기
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});