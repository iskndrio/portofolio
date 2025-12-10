const toggle = document.getElementById("themeToggle");
    const html = document.querySelector("html");

    if (localStorage.getItem("theme")) {
      html.setAttribute("data-theme", localStorage.getItem("theme"));
      toggle.checked = localStorage.getItem("theme") === "dark";
    }

    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    });