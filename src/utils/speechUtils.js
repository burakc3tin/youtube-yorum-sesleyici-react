
export const handleSpeechOnClick = (comments, currentCommentIndex, setCurrentCommentIndex, speak, cancel) => {

    if (currentCommentIndex < comments.length - 1) {
        cancel();
        const nextCommentIndex = currentCommentIndex + 1;
        const nextCommentText = comments[nextCommentIndex].snippet.textDisplay;
        speak({ text: nextCommentText });
        setCurrentCommentIndex(nextCommentIndex);
    } else {
        const firstCommentText = comments[0].snippet.textDisplay;
        speak({ text: firstCommentText });
        setCurrentCommentIndex(0);
    }
};

export const handleSpeechStop = (cancel, setCurrentCommentIndex) => {
    cancel();
    setCurrentCommentIndex(-1);
};
