document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-sidebar > div");
    const infos = document.querySelectorAll(".carousel-info > div");

    let show_nav = false;

    items.forEach(item => {
        item.addEventListener("mouseenter", () => {

            const color = getComputedStyle(item).backgroundColor;
            carousel.style.backgroundColor = dim_color(color, 0.95);

            const i = item.dataset.i;

            infos.forEach(el => el.classList.remove("active"));
            if (infos[i]) infos[i].classList.add("active");
        });
    });

    function dim_color(rgb, factor) {
        const v = rgb.match(/\d+/g).map(Number);
        const d = v.map(n => Math.floor(n * factor)); // shoutout js for this thing
        return `rgb(${d.join(",")})`;
    }

    function pain(e, y) {
        const nav = document.querySelector(".navbar");

        /*switch (y) {
            case (true):
                if (!show_nav) {
                    show_nav = true;
                    nav.style.top = `0px`;
                    console.log("wijwfjinwf");
                }
                break;
            case (false):
                if (show_nav) {
                    show_nav = false;
                    nav.style.top = `-100px`;
                    console.log("oeooeoeoe");
                }
                break;
            default:
                break;
        }*/

        if (!show_nav && y) {
            show_nav = true;
            nav.style.top = `0px`;
            console.log("wijwfjinwf");
        } else if (show_nav && !y) {
            show_nav = false;
            nav.style.top = `-100px`;
            console.log("oeooeoeoe");
        }
    }

    function wowie(e) {
        /*
        igor.style.setProperty("--cover-bg-x", `${e.clientX / 64}`);   // most buns ass shit ever bunshart
        */

        const igor = document.querySelector(".cover");

        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;

        igor.style.setProperty('--parallax-x', `${x}px`);
        igor.style.setProperty('--parallax-y', `${y}px`);
    }

    document.addEventListener("mousemove", (e) => {
        pain(e, (e.clientY < window.innerHeight / 5))
        wowie(e);
    });

});