// 페이지 로드 시 저장된 테마 확인 및 슬라이드 쇼 시작
document.addEventListener('DOMContentLoaded', () => {
    // 1. 다크 모드 테마 확인
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // 2. 갤러리 섹션이 있을 때 슬라이드 쇼 시작
    if (document.getElementById('gallery-img')) {
        startSlideshow();
    }
});

// 다크모드 토글 함수
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // 로컬 스토리지에 테마 저장 또는 제거
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
}

// 페이지 로드 시 저장된 테마 확인 및 슬라이드 쇼 시작
document.addEventListener('DOMContentLoaded', () => {
    // 다크 모드 테마 확인
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // 갤러리 섹션이 있을 때 슬라이드 쇼 시작
    if (document.getElementById('gallery-img')) {
        showSlides(currentIndex); // 첫 번째 이미지 표시
        startAutoSlide(); // 자동 슬라이드 시작
    }
});

// 다크모드 토글 함수 (기존 코드 유지)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
}

// --- 새로운 캐러셀 슬라이드 쇼 코드 ---

document.addEventListener('DOMContentLoaded', () => {
    // 다크 모드 테마 확인
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // 캐러셀이 있는 페이지에서만 스크립트 실행
    const track = document.querySelector('.carousel-track');
    if (track) {
        slides = Array.from(track.children);
        moveToSlide(track, slides[0]); // 첫 번째 슬라이드로 시작
        startAutoSlide(); // 자동 슬라이드 시작
    }
});

let slides;
let currentIndex = 0;
let slideInterval;

const moveToSlide = (track, targetSlide) => {
    const targetIndex = slides.findIndex(slide => slide === targetSlide);
    currentIndex = targetIndex;

    slides.forEach((slide, index) => {
        slide.classList.remove('current-slide', 'prev-slide', 'next-slide');

        if (index === currentIndex) {
            slide.classList.add('current-slide');
        } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
            slide.classList.add('prev-slide');
        } else if (index === (currentIndex + 1) % slides.length) {
            slide.classList.add('next-slide');
        }
    });

    // 중앙 슬라이드를 기준으로 트랙 위치 조정
    const centerPosition = targetSlide.offsetLeft + (targetSlide.offsetWidth / 2);
    const trackContainerWidth = track.parentElement.offsetWidth;
    track.style.transform = 'translateX(' + (trackContainerWidth / 2 - centerPosition) + 'px)';
};

function plusSlides(n) {
    clearInterval(slideInterval); // 수동 조작 시 자동 타이머 초기화
    const newIndex = (currentIndex + n + slides.length) % slides.length;
    moveToSlide(document.querySelector('.carousel-track'), slides[newIndex]);
    startAutoSlide(); // 타이머 재시작
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 4000); // 4초마다 이미지 변경
}

// 다크모드 토글 함수 (기존 코드 유지)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
}