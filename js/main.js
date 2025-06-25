const projects = [
    {
        title: "Puzzle Game",
        desc: "لعبة ألغاز باستخدام JavaScript.",
        img: "images/Screenshot_20250624_124901.png",
        link: "https://ziadhashem.github.io/Puzzle-Game/",
        btn: "تجربة اللعبة"
    },
    {
        title: "Snake Game",
        desc: "لعبة كلاسيكية بلغة JavaScript + HTML.",
        img: "images/Screenshot 2025-06-24 030103.png",
        link: "https://github.com/ziadhashem/Snake-Game",
        btn: "عرض الكود"
    },
    {
        title: "Recursive Algorithm",
        desc: "توضيح خوارزمية العودية بشكل مرئي.",
        img: "images/Screenshot_20250624_010025.png",
        link: "https://github.com/ziadhashem/Recursive-algorithm",
        btn: "عرض المشروع"
    },
    {
        title: "Drawing by CSS3",
        desc: "رسومات مبتكرة باستخدام CSS فقط.",
        img: "images/Screenshot_20250624_010645.png",
        link: "https://github.com/ziadhashem/Drawing-by-CSS3",
        btn: "عرض المشروع"
    },
    {
        title: "Landing Page",
        desc: "تصميم صفحة هبوط متجاوبة.",
        img: "images/Screenshot 2025-06-24 025606.png",
        link: "https://github.com/ziadhashem/Landing-Page-",
        btn: "عرض المشروع"
    },
    {
        title: "Static Website",
        desc: "موقع ثابت متعدد الصفحات بتصميم بسيط.",
        img: "images/Screenshot 2025-06-24 011506.png",
        link: "https://github.com/ziadhashem/Static-Website",
        btn: "عرض المشروع"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projects-container");
    projects.forEach((proj, index) => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4 animate__animated animate__fadeInUp";
        col.style.animationDelay = `${index * 0.1}s`;
        col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${proj.img}" class="card-img-top" alt="${proj.title}" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${proj.title}</h5>
              <p class="card-text flex-grow-1">${proj.desc}</p>
              <a href="${proj.link}" target="_blank" class="btn btn-outline-purple mt-auto">${proj.btn}</a>
            </div>
          </div>
        `;
        container.appendChild(col);
    });
});

// إظهار الزر عند التمرير للأسفل
window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// عند الضغط على السهم يرجع للأعلى بسلاسة
document.getElementById("backToTopBtn").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});