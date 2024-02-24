document.addEventListener("DOMContentLoaded", function () {
    // URL del archivo JSON que contiene la información de los videos
    const jsonUrl = "videos.json";

    // Realiza una solicitud HTTP GET para cargar el JSON
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            // Itera sobre los datos del JSON
            data.videos.forEach(video => {
                // Crea un elemento iframe para cada video
                const iframe = document.createElement("iframe");
                iframe.src = video.src;
                iframe.frameborder = 0;
                iframe.width = 560;
                iframe.height = 315;
                iframe.scrolling = "no";
                iframe.allowfullscreen = true;

                // Crea un contenedor para el video y añádelo al DOM
                const container = document.createElement("div");
                container.classList.add("container-videos");
                container.appendChild(iframe);
                document.getElementById("video-section").appendChild(container);
            });
        })
        .catch(error => console.error("Error al cargar el JSON:", error));
});
