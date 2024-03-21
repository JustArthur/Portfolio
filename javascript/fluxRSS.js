document.addEventListener('DOMContentLoaded', function () {
    // Liste des identifiants de chaîne YouTube
    var channelIds = ['CHANNEL_ID_1', 'CHANNEL_ID_2']; // Remplacez ces valeurs par les ID de vos chaînes YouTube

    // Fonction pour récupérer les vidéos de chaque chaîne
    function getVideos(channelId) {
        var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + channelId + '&maxResults=5&order=date&type=video&key=YOUR_API_KEY'; // Remplacez YOUR_API_KEY par votre clé API YouTube
        fetch(url)
            .then(response => response.json())
            .then(data => {
                parseVideos(data.items);
            })
            .catch(error => console.error('Erreur lors de la récupération des vidéos :', error));
    }

    // Fonction pour analyser les données des vidéos et les afficher dans le flux RSS
    function parseVideos(videos) {
        var rssFeed = document.getElementById('rss-feed');
        videos.forEach(video => {
            var title = video.snippet.title;
            var videoUrl = 'https://www.youtube.com/watch?v=' + video.id.videoId;
            var thumbnailUrl = video.snippet.thumbnails.default.url;

            var li = document.createElement('li');
            var a = document.createElement('a');
            var img = document.createElement('img');
            var text = document.createTextNode(title);

            a.href = videoUrl;
            a.target = '_blank';
            img.src = thumbnailUrl;
            img.alt = title;

            a.appendChild(img);
            a.appendChild(text);
            li.appendChild(a);
            rssFeed.appendChild(li);
        });
    }

    // Appeler la fonction getVideos pour chaque chaîne spécifiée
    channelIds.forEach(channelId => {
        getVideos(channelId);
    });
});