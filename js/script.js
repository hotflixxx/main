document.addEventListener("DOMContentLoaded", function () {
    const jsonUrl = "videos.json";

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            data.videos.forEach(video => {
                const iframe = document.createElement("iframe");
                iframe.src = video.src;
                iframe.frameborder = 0;
                iframe.height = 315;
                iframe.scrolling = "no";
                iframe.allowfullscreen = true;

                const screenWidth = window.innerWidth || document.documentElement.clientWidth;
                const maxWidth = Math.min(560, screenWidth);
                iframe.width = maxWidth;

                const container = document.createElement("div");
                container.classList.add("container-videos");
                container.appendChild(iframe);
                document.getElementById("video-section").appendChild(container);
            });
        })
        .catch(error => console.error("Error al cargar el JSON:", error));
});
