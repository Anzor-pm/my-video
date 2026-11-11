import React from 'react';
import {interpolate,spring,useCurrentFrame,useVideoConfig} from 'remotion';

export const GlassCaption:React.FC<{text:string;start:number;end:number}> = ({text,start,end}) => {
 const frame=useCurrentFrame();
 const {fps}=useVideoConfig();
 const inFrames=Math.round(start*fps), outFrames=Math.round(end*fps);
 if(frame<inFrames || frame>=outFrames) return null;
 const appear=spring({frame:frame-inFrames,fps,config:{damping:19,stiffness:140}});
 const fade=interpolate(frame,[outFrames-12,outFrames],[1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <div style={{position:'absolute',bottom:210,left:75,right:75,display:'flex',justifyContent:'center',pointerEvents:'none',opacity:appear*fade,transform:`translateY(${(1-appear)*32}px)`}}>
  <div style={{background:'linear-gradient(120deg,rgba(255,255,255,.24),rgba(255,255,255,.08))',backdropFilter:'blur(28px)',WebkitBackdropFilter:'blur(28px)',border:'1.5px solid rgba(255,255,255,.36)',boxShadow:'0 20px 60px rgba(0,0,0,.38), inset 0 1px rgba(255,255,255,.28)',borderRadius:28,padding:'25px 38px',maxWidth:'100%',textAlign:'center',color:'#fff',fontFamily:'Arial,sans-serif',fontSize:43,fontWeight:800,lineHeight:1.4,textShadow:'0 2px 12px #0009'}}>
   {text}
  </div>
 </div>;
};
