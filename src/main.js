let projects = [
    { title: "SMKN 4 Tasikmalaya website display", img: "projects/smkn4 .png", link: "https://ukkrio4tsm.netlify.app/" },
    { title: "Ode Convection website display", img: "projects/odekonveksi.png", link: "https://odekonveksi.netlify.app/" },
    { title: "Copy Adobe UI with Bootstrap5", img: "projects/adobe.png", link: "https://spiffy-figolla-d12a3e.netlify.app/" },
    { title: "Todo List with JavaScript", img: "projects/todolist.png", link: "https://todolistrio.netlify.app/" },
    { title: "LKS Mart 2025", img: "projects/lksmart.png", link: "https://todolistrio.netlify.app/" },
];

let mainContainer = document.getElementById("projects");

projects.forEach((item) => {
    let cardHTML = `
        <div onclick="targetBlank('${item.link}')" class="bg-base-100 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
            <img src="${item.img}" alt="${item.title}" class="w-full h-40 object-cover">

            <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">${item.title}</h3>
            </div>
        </div>
    `;


    mainContainer.insertAdjacentHTML("beforeend", cardHTML);
});


function targetBlank(link) {
    window.open(link, "_blank");
}