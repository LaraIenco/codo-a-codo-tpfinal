function playVideo(videoId) {
    const videoFrame = document.getElementById('videoFrame');
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoFrame.src = videoUrl;
    // Desplazar la página hacia el contenedor del iframe
    const iframeContainer = document.getElementById('iframe-container');
    iframeContainer.scrollIntoView({ behavior: 'smooth' }); 

}