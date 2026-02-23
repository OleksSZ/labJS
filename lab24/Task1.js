
const imagePaths = [
  "https://images.unsplash.com/photo-1557683316-973673baf926?w=800",
  "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
  "https://mrwallpaper.com/images/high/high-tech-phone-wz76y60spfb2kk0i.jpg",
  "https://free-3dtextureshd.com/wp-content/uploads/2024/03/215-1.jpg.webp",
  "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800",
  "https://tse4.mm.bing.net/th/id/OIP.ew5sKlBiNmgjbMZ6hPgDZwHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://images.unsplash.com/photo-1557683316-973673baf926?w=800"
];

// Знаходимо елементи
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("close");

// Створюємо галерею
imagePaths.forEach(src => {
  const item = document.createElement("div");
  item.className = "gallery-item";

  const img = document.createElement("img");
  img.src = src;
  img.alt = "gallery image";
  img.loading = "lazy";

  item.appendChild(img);
  gallery.appendChild(item);

  // Подвійний клік щоб відкрити модалку
  item.addEventListener("dblclick", () => {
    modalImg.src = src;
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("active"), 20);
  });
});

// Закриття модалки
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
  }, 400);
}