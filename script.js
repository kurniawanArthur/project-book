/* eslint-disable quotes */
const book = document.getElementById("book");
const pages = document.querySelectorAll(".page-content");
const nextBtn = document.getElementById("nextPage");
const prevBtn = document.getElementById("prevPage");
const cover = document.querySelector(".cover-front");
const portfolioContainer = document.querySelector(".portfolio-container");

let isOpen = false;
let currentPage = 0;

cover.addEventListener("click", () => {
    isOpen = !isOpen;
    book.classList.toggle("open", isOpen);
    portfolioContainer.classList.toggle("zoom-in", isOpen);

    if (isOpen) {
        // Lebih cepat - delay hanya 200ms
        setTimeout(() => {
            document.querySelector('.cover').classList.add('plain-inner');
        }, 200);

        currentPage = 0;
        pages.forEach((page, index) => {
            page.classList.toggle("active", index === currentPage);
        });
    } else {
        // Langsung kembalikan tampilan normal tanpa delay
        document.querySelector('.cover').classList.remove('plain-inner');
        pages.forEach(page => page.classList.remove("active"));
    }
});

nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove("active");
        currentPage++;
        pages[currentPage].classList.add("active");
    }
});

prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentPage > 0) {
        pages[currentPage].classList.remove("active");
        currentPage--;
        pages[currentPage].classList.add("active");
    }
});

book.addEventListener("mouseenter", () => {
    book.classList.add("hovered");
});

book.addEventListener("mouseleave", () => {
    if (!isOpen) book.classList.remove("hovered");
});