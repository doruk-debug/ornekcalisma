/* ============================================
   SÜPER GALERİ - JAVASCRIPT DOSYASI
   ============================================ */

/* ---- 1. HAMBURGER MENÜ (MOBİL) ---- */

// Gerekli elementleri seçiyoruz
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

// Hamburger butonuna tıklanınca menüyü aç/kapa
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Menüdeki bir linke tıklanınca menü otomatik kapansın
const navLinkItems = document.querySelectorAll(".nav-links a");

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});




/* ---- 2. KATEGORİ FİLTRELEME (TÜMÜ / OTOMOBİL / SUV) ---- */

// Filtre butonlarını ve araç kartlarını seçiyoruz
const filterButtons = document.querySelectorAll(".filter-btn");
const carCards = document.querySelectorAll(".car-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {

    // 1. Önce tüm butonlardan "active" sınıfını kaldır
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // 2. Tıklanan butona "active" sınıfını ekle
    button.classList.add("active");

    // 3. Tıklanan butonun hangi kategoriyi istediğini al
    const selectedFilter = button.getAttribute("data-filter");

    // 4. Her araç kartını kontrol et, göster ya da gizle
    carCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (selectedFilter === "tumu" || cardCategory === selectedFilter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});