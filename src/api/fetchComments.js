const fetchComments = async (videoLink) => {
    let videoId;
    if (videoLink.includes('youtu.be')) {
        videoId = videoLink.split('youtu.be/')[1].split('?')[0];
    } else {
        videoId = videoLink.split('v=')[1].split('&')[0];
    }

    const apiKey = 'AIzaSyDMF0c_ER249Oc-fNGKTBDbCX0CvzQQTio';
    const apiUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=100&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const topLevelComments = data.items.map((item) => item.snippet.topLevelComment);

        const filteredComments = topLevelComments.filter((comment) => {
            const text = comment.snippet.textDisplay;
            return /[a-zA-Z]/.test(text) && text.length >= 10;
        });

        return filteredComments;
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
};

export default fetchComments;
