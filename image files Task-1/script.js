const images = document.querySelectorAll(".image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const closeBtn = document.getElementById("close");

let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close
closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

// Next
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
};

// Prev
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
};

// Filter
function filterImages(category) {
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
