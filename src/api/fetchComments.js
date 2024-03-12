const fetchComments = async (videoLink) => {
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    const videoId = videoLink.split('v=')[1];
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
