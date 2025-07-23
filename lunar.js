document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".zoomable").forEach(img => {
        img.style.cursor = "zoom-in";

        img.addEventListener("click", () => {
            const popup = document.createElement("div");
            popup.style.position = "fixed";
            popup.style.top = "0";
            popup.style.left = "0";
            popup.style.width = "100%";
            popup.style.height = "100%";
            popup.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
            popup.style.display = "flex";
            popup.style.alignItems = "center";
            popup.style.justifyContent = "center";
            popup.style.zIndex = "9999";
            popup.innerHTML = `
                <img src="${img.src}" style="max-width: 90%; max-height: 90%; border-radius: 10px; box-shadow: 0 0 20px white;">
            `;

            popup.addEventListener("click", () => {
                document.body.removeChild(popup);
            });

            document.body.appendChild(popup);
        });
    });
});

