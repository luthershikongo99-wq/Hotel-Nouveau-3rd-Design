// Multi-language support
const translations = {
    en: {
        aboutTitle: "About Us",
        aboutList: [
            "Airport transfers & shuttle services",
            "Massage & Wellness treatment",
            "Conference facilities",
            "Hospitality and administrative support",
            "Visa & Immigration assistance",
            "Local tours",
            "Tailored accommodation options",
            "Licenced Bar"
        ],
        contactTitle: "Contact",
        phone: "Phone:",
        email: "Email:",
        address: "Address:"
    },
    fr: {
        aboutTitle: "À propos",
        aboutList: [
            "Transferts aéroport & services de navette",
            "Massage & soins de bien-être",
            "Salles de conférence",
            "Support en hôtellerie et administration",
            "Assistance pour visas & immigration",
            "Tours locaux",
            "Options d'hébergement sur mesure",
            "Bar agréé"
        ],
        contactTitle: "Contact",
        phone: "Téléphone:",
        email: "Email:",
        address: "Adresse:"
    },
    de: {
        aboutTitle: "Über uns",
        aboutList: [
            "Flughafentransfers & Shuttleservices",
            "Massage- & Wellness-Behandlung",
            "Konferenzräume",
            "Hospitality & Verwaltungsunterstützung",
            "Visa- & Einwanderungshilfe",
            "Lokale Touren",
            "Individuelle Unterkunftsmöglichkeiten",
            "Lizenzierte Bar"
        ],
        contactTitle: "Kontakt",
        phone: "Telefon:",
        email: "Email:",
        address: "Adresse:"
    },
    nl: {
        aboutTitle: "Over ons",
        aboutList: [
            "Vliegveldtransfers & shuttlediensten",
            "Massage & wellnessbehandelingen",
            "Vergaderfaciliteiten",
            "Hospitality en administratieve ondersteuning",
            "Visa & immigratiehulp",
            "Lokale rondleidingen",
            "Op maat gemaakte accommodatie-opties",
            "Vergunninghoudende bar"
        ],
        contactTitle: "Contact",
        phone: "Telefoon:",
        email: "Email:",
        address: "Adres:"
    }
};

const languageSelect = document.getElementById("languageSelect");
languageSelect.addEventListener("change", e => {
    const lang = e.target.value;

    document.querySelectorAll("[data-key]").forEach(el => {
        if(el.tagName === "UL"){
            el.innerHTML = "";
            translations[lang].aboutList.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                el.appendChild(li);
            });
        } else if(el.dataset.key === "phone" || el.dataset.key === "email" || el.dataset.key === "address"){
            el.textContent = translations[lang][el.dataset.key];
        } else {
            el.textContent = translations[lang][el.dataset.key];
        }
    });
});

// GALLERY
const galleryImages = [
    "1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg",
    "7.jpeg","8.jpeg","9.jpeg","10.jpeg","11.jpeg","12.jpeg",
    "Room 1.jpeg","Room 2.jpeg","Bar.jpeg","Drone shot.jpeg"
];

let currentIndex = 0;
const galleryImg = document.getElementById("galleryImg");

function showImage(index){
    galleryImg.style.opacity = 0;
    setTimeout(() => {
        galleryImg.src = galleryImages[index];
        galleryImg.style.opacity = 1;
    }, 400);
}

function nextImage(){
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
}

function prevImage(){
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
}

// Auto slideshow
setInterval(nextImage, 5000);

// Buttons
document.getElementById("nextBtn").addEventListener("click", nextImage);
document.getElementById("prevBtn").addEventListener("click", prevImage);
