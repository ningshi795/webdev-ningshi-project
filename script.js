document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const mainContent = document.querySelector("main");
    const aside = document.querySelector("aside");

    title.textContent = "Belajar Javascript Dasar - Interaksi Pertama! 😊🌸";
    title.addEventListener("click", () => {
        nav.classList.toggle("show-nav");

    // === Paragraf pertama di artikel setelah header, di artikel pertama berubah ketika diklik ===
    const targetParagraph = document.querySelector("article:first-of-type > p");

    document.querySelector("article:first-of-type").addEventListener("click", () => {
        targetParagraph.textContent = 
            "paragraf ini berubah karena kamu klik aku, dan semuanya terjadi lewat event klik dan manipulasi DOM!💗🎀🌷";
    });

    });

    document.addEventListener("keydown", (event) => {
        if(event.key === "d") {
            document.body.classList.toggle("dark");
        }
    });

    let count = 0;
    mainContent.addEventListener("click", () => {
        count++;
        aside.textContent = `Kamu klik konten ini sebanyak ${count} kali`;
    });

    // === Ukuran font navbar berubah saat tombol F ditekan ===
    document.addEventListener("keydown", (event) => {
        if (event.key === "f" || event.key === "F") {
            const navList = document.querySelector("nav ul");
            navList.style.fontSize =
            navList.style.fontSize === "26px" ? "18px" : "26px";
        }
    });

    // === Background halaman berubah tiap scroll 200px ===
    let lastScrollChange = 0;
    const colors = ["#ffeaea", "#e8faff", "#fff6d9", "#f0e8ff", "#e0ffe8"];
    let colorIndex = 0;

    window.addEventListener("scroll", () => {
        if (window.scrollY - lastScrollChange >= 200) {
            colorIndex = (colorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[colorIndex];
            lastScrollChange = window.scrollY;
        }
    });

    console.log("kode ini sedang di eksekusi");
});