import React, { useState } from 'react';
import fetchComments from '../../api/fetchComments';  
import { useSpeechSynthesis } from 'react-speech-kit';
import { handleSpeechOnClick, handleSpeechStop } from '../../utils/speechUtils';
import { PLACEHOLDER_YOUTUBE_LINK } from '../../constants/constant';
import './Home.css';
import Play from '../../components/Play';
import Pause from '../../components/Pause';
import Spinner from '../../components/Spinner/Spinner';

export default function Home() {
    const [comments, setComments] = useState([]);
    const [videoLink, setVideoLink] = useState('');
    const [currentCommentIndex, setCurrentCommentIndex] = useState(-1);
    const { speak, cancel } = useSpeechSynthesis();
    const [loading, setLoading] = useState(false); // Yükleniyor durumunu tutacak state

    const handleOnClick = () => {
      handleSpeechOnClick(comments, currentCommentIndex, setCurrentCommentIndex, speak, cancel);
    };
  
    const handleStop = () => {
      handleSpeechStop(cancel, setCurrentCommentIndex);
    };

    const handleFetchComments = async () => {
        setLoading(true);
        const fetchedComments = await fetchComments(videoLink);
        setComments(fetchedComments);
        setLoading(false);
    };

    const handleCommentClick = (index) => {
      cancel();
        setCurrentCommentIndex(index);
        speak({ text: comments[index].snippet.textDisplay });
    };

  return (
    <div className='container'>
    <h1>Youtube <span>Yorum</span> Sesleyici</h1>
    <div className='button-team'>
      <Play onPlay={handleOnClick} />
      <Pause onStop={handleStop} />
    </div>
    <input placeholder={PLACEHOLDER_YOUTUBE_LINK} className='youtube-link-input' type="text" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} />
    <button className='youtube-button' onClick={handleFetchComments}>Yorumları Getir</button>
    {loading && <Spinner />}  
    <hr />
    <div className='content'>
      {comments.map((comment, index) => (
        <div 
          style={{ background: currentCommentIndex === index ? '#f7e1f0' : '#f2f2f2', color: 'gray', borderRadius: 5, cursor: 'pointer' }} 
          key={comment.id}
          onClick={() => handleCommentClick(index)}
        >
          <p style={{ padding: 10 }}>{comment.snippet.textDisplay}</p>
        </div>

      ))}
    </div>
  </div>
  )
}
