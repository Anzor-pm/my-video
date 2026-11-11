import React from 'react';
import {Composition} from 'remotion';
import {Prado} from './prado';
export const Root:React.FC=()=> <Composition id="Prado" component={Prado} durationInFrames={600} fps={30} width={1080} height={1920}/>;
