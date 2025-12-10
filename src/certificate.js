const certificate = [
    {img: "../certificate/dasar ai.jpg", title: "Belajar Dasar AI", teks1: "Dicoding Indonesia"},
    {img: "../certificate/dasar web.jpg", title: "Belajar Dasar Pemograman", teks1: "Dicoding Indonesia"},
    {img: "../certificate/financial lteracy.jpg", title: "Introduction to financial literacy", teks1: "Dicoding Indonesia"},
    {img: "../certificate/sertifikat _1.jpg", title: "LKS Web Technology", teks1: "DISDIK Jabar"},
    {img: "../certificate/sertifikat _2.jpg", title: "TOEIC Test", teks1: "TOEIC"},
];

const certContainer = document.getElementById("certificate");

certificate.forEach((item) => {
    let cardHTML = `
        <div class="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
          <div class="overflow-hidden">
            <img src="${item.img}" alt="${item.title}"
              class="w-full h-40 object-cover group-hover:scale-105 transition duration-300" />
          </div>

          <div class="p-4">
            <h3 class="font-semibold text-lg">${item.title}</h3>
            <p class="text-gray-600 text-sm">${item.teks1}</p>
            <p class="text-gray-400 text-xs mt-2">2025</p>
          </div>
    `;

    certContainer.insertAdjacentHTML("beforeend", cardHTML);
});