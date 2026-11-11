import React from 'react';
import {Audio,AbsoluteFill,staticFile} from 'remotion';
export const Soundtrack:React.FC=()=> <AbsoluteFill>
  <Audio src={staticFile('cinematic.wav')} volume={0.65}/>
  <Audio src={staticFile('impacts.wav')} volume={0.8}/>
  {/* For a male Tajik voiceover, upload public/voice.wav and uncomment:
  <Audio src={staticFile('voice.wav')} volume={1}/>
  */}
</AbsoluteFill>;
