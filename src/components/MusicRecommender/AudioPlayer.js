// Deal with favicon to play/pause
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// Deal with audio component
/* eslint-disable jsx-a11y/media-has-caption */

import React, { useEffect, useRef, useState } from 'react';

export default function AudioPlayer({ track }) {




 
  const audioPlayer = useRef();
  
  const [seekValue, setSeekValue] = useState(0);
  const [playing, setPlaying] = useState(false);

 
  const togglePlay = () => {

    if (playing) {
      audioPlayer.current.pause();
      setPlaying(false);
    }

    if (!playing) {
      audioPlayer.current.play();
      setPlaying(true);
    }
  };

  const onPlaying = () => {
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
    );
  };

  return (
    <div>
      <audio
        className="audio_control"
        src={track.previewUrl}
        ref={audioPlayer}
        onTimeUpdate={onPlaying}
      />
      <i
        className={
          playing ? 'fas fa-pause play_button' : 'fas fa-play play_button'
        }
        data-toggle="tooltip"
        data-placement="bottom"
        title="Preview song"
        onClick={togglePlay}
      />
      <br />
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={seekValue || 0}
        onChange={(e) => {
          const seekto = audioPlayer.current.duration * (+e.target.value / 100);
          audioPlayer.current.currentTime = seekto;
          setSeekValue(e.target.value);
        }}
      />
    </div>
  );
}
