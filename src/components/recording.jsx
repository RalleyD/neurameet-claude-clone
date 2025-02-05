import React, { useState, useEffect, useRef } from 'react';

const Recording = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [timerInterval, setTimerInterval] = useState(null);
  const [recording, setRecording] = useState(false);
  const [recordingsList, setRecordingsList] = useState([]);

  const timerRef = useRef(null);

  const updateTimer = () => {
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((elapsed % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = (elapsed % 1000).toString().padStart(3, '0');
    timerRef.current.textContent = `${minutes}:${seconds}.${milliseconds}`;
  };

  const handleRecord = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const newMediaRecorder = new MediaRecorder(stream);
      setMediaRecorder(newMediaRecorder);
      setAudioChunks([]);
      newMediaRecorder.addEventListener('dataavailable', (event) => {
        setAudioChunks((prev) => [...prev, event.data]);
      });

      newMediaRecorder.addEventListener('stop', async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('audio', audioBlob, 'recording.wav');

        const response = await fetch('/record', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          const recordingItem = document.createElement('div');
          recordingItem.className = 'list-group-item d-flex justify-content-between align-items-center';

          const name = document.createElement('span');
          name.textContent = result.filename;

          const audio = document.createElement('audio');
          audio.controls = true;
          audio.src = URL.createObjectURL(audioBlob);

          recordingItem.appendChild(name);
          recordingItem.appendChild(audio);
          setRecordingsList((prev) => [recordingItem, ...prev]);
        }
      });

      newMediaRecorder.start();
      setStartTime(Date.now());
      setTimerInterval(setInterval(updateTimer, 10));
      setRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
      alert('Error accessing microphone. Please ensure you have granted permission.');
    }
  };

  const handleStop = () => {
    mediaRecorder.stop();
    clearInterval(timerInterval);
    timerRef.current.textContent = '00:00.000';
    setRecording(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerInterval);
    };
  }, [timerInterval]);

  return (
    <div>
      <h2>Audio Recorder</h2>
      <div id="timer" ref={timerRef}>
        00:00.000
      </div>
      <button id="recordButton" onClick={handleRecord} disabled={recording}>
        Record
      </button>
      <button id="stopButton" onClick={handleStop} disabled={!recording}>
        Stop
      </button>
      <div id="recordingsList">
        {recordingsList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Recording;