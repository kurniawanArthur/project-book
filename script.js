const book = document.getElementById("book");
const pages = document.querySelectorAll(".page-content");
const nextBtn = document.getElementById("nextPage");
const prevBtn = document.getElementById("prevPage");

let isOpen = false;
let currentPage = 0;

book.addEventListener("click", () => {
    isOpen = !isOpen;
    book.classList.toggle("open", isOpen);
    currentPage = 0;
    pages.forEach((page, index) => {
        page.classList.toggle("active", index === currentPage);
    });
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
    if(!isOpen) book.classList.remove("hovered");
});