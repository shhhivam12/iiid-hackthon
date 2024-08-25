document.getElementById('open-video-conferencing').addEventListener('click', function() {
    const container = document.getElementById('video-conferencing-container');
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
    } else {
        container.classList.add('hidden');
    }
});
