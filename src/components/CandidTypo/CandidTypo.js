import { useRef } from 'react';
import Video from './candid3.mp4'
import './CandidTypo.css';

function CandidTypo() {
  const videoRef = useRef();
  
  // 비디오 로드 시 자동재생을 시도하는 함수 추가
  const handleCanPlay = () => {
    setPlayBackRate();
    // 자동재생 시도
    videoRef.current.play().catch(error => {
      console.log("자동재생 실패:", error);
    });
  };

  const setPlayBackRate = () => {
    videoRef.current.playbackRate = 0.5;
  };

  return (
    <video 
      muted
      autoPlay
      playsInline // iOS Safari를 위한 속성 추가
      loop
      ref={videoRef}
      onCanPlay={handleCanPlay}
      width="300px"
      height="auto"
    >
      <source src={Video} type="video/mp4" />
    </video>
  );
}

export default CandidTypo;
