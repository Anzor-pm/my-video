import React from 'react';
import {Soundtrack} from './audio';
import {GlassCaption} from './glass-caption';
import {captions} from './captions';
import {AbsoluteFill,Img,interpolate,spring,staticFile,useCurrentFrame,useVideoConfig} from 'remotion';
const scenes=[
 {file:'front.jpg',a:0,b:110,title:'LAND CRUISER',subtitle:'PRADO'},
 {file:'angle.jpg',a:110,b:220,title:'VX LIMITED',subtitle:'PREMIUM SUV'},
 {file:'interior.jpg',a:220,b:330,title:'COMFORT',subtitle:'САЛОНИ БАРҲАВО'},
 {file:'rear.jpg',a:330,b:450,title:'TOYOTA PRADO',subtitle:'ҚУДРАТ ВА ҲАШАМАТ'},
];
const gold='#e4c48a';
const Shot:React.FC<{file:string;a:number;b:number;title:string;subtitle:string;i:number}>=({file,a,b,title,subtitle,i})=>{
 const frame=useCurrentFrame()/4;const fps=30;const t=frame-a;
 const opacity=interpolate(frame,[a,a+12,b-12,b],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const zoom=interpolate(t,[0,b-a],[1.05,1.2],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const move=interpolate(t,[0,b-a],[i%2?20:-20,i%2?-20:20]);
 const intro=spring({frame:t-10,fps,config:{damping:16,stiffness:90}});
 return <AbsoluteFill style={{opacity,overflow:'hidden'}}>
  <Img src={staticFile(file)} style={{width:'100%',height:'100%',objectFit:'cover',transform:`scale(${zoom}) translateX(${move}px)`,filter:'contrast(1.12) saturate(.9) brightness(.78)'}}/>
  <AbsoluteFill style={{background:'linear-gradient(180deg,#0008,transparent 35%,#000d)'}}/>
  <div style={{position:'absolute',left:65,right:65,bottom:260,opacity:intro,transform:`translateY(${(1-intro)*85}px)`,fontFamily:'Arial'}}>
   <div style={{fontSize:30,letterSpacing:9,color:gold,fontWeight:800}}>{subtitle}</div>
   <div style={{fontSize:83,fontWeight:900,color:'white',lineHeight:1.1,marginTop:18,textShadow:'0 10px 40px #000'}}>{title}</div>
   <div style={{height:6,width:interpolate(t,[10,45],[0,250],{extrapolateRight:'clamp'}),background:gold,marginTop:30}}/>
  </div>
 </AbsoluteFill>;
};
export const Prado:React.FC=()=>{
 const f=useCurrentFrame()/4;const fps=30;
 const priceIn=spring({frame:f-455,fps,config:{damping:13,stiffness:70}});
 return <AbsoluteFill style={{background:'#050708',overflow:'hidden'}}>
  <Soundtrack/>
  {captions.map((caption,i)=><GlassCaption key={i} {...caption}/>)}
  {scenes.map((s,i)=><Shot key={s.file} {...s} i={i}/>)}
  {f>=450?<AbsoluteFill style={{background:'radial-gradient(circle at center,#26343b,#020304 75%)',justifyContent:'center',alignItems:'center',fontFamily:'Arial',color:'white'}}>
   <div style={{fontSize:34,letterSpacing:12,color:gold}}>TOYOTA</div>
   <div style={{fontSize:105,fontWeight:900,marginTop:25}}>PRADO</div>
   <div style={{fontSize:38,letterSpacing:7}}>VX LIMITED</div>
   <div style={{width:550,height:2,background:gold,marginTop:100}}/>
   <div style={{fontSize:34,letterSpacing:5,color:gold,marginTop:65}}>НАРХИ ФУРӮШ</div>
   <div style={{fontSize:120,fontWeight:900,marginTop:25,opacity:priceIn,transform:`scale(${.7+.3*priceIn})`}}>210 000</div>
   <div style={{fontSize:49,fontWeight:700,color:gold,letterSpacing:6}}>СОМОНӢ</div>
   <div style={{fontSize:32,marginTop:120}}>БАРОИ ХАРИД МУРОҶИАТ КУНЕД</div>
  </AbsoluteFill>:null}
  <div style={{position:'absolute',top:75,left:55,fontFamily:'Arial',fontSize:23,color:gold,letterSpacing:6}}>PRADO / NIGHT EDITION</div>
  <div style={{position:'absolute',bottom:80,left:60,right:60,height:3,background:'#ffffff33'}}>
   <div style={{height:3,width:`${f/600*100}%`,background:gold}}/>
  </div>
 </AbsoluteFill>;
};
