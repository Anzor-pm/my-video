"""Create an original 20-second cinematic instrumental bed and sound effects.
No external API, samples, or copyrighted recordings are used.
"""
import math, os, wave, random
RATE=24000
DURATION=20
random.seed(12)
os.makedirs("public",exist_ok=True)
def write(path, generator):
    with wave.open(path,"wb") as f:
        f.setnchannels(1);f.setsampwidth(2);f.setframerate(RATE)
        chunk=bytearray()
        for n in range(RATE*DURATION):
            x=max(-1,min(1,generator(n/RATE)))
            chunk.extend(int(x*32767).to_bytes(2,"little",signed=True))
            if len(chunk)>24000:
                f.writeframesraw(chunk);chunk.clear()
        if chunk:f.writeframesraw(chunk)
def bed(t):
    chords=[(110,164.81,220),(98,146.83,196),(87.31,130.81,174.61),(98,146.83,196)]
    notes=chords[min(3,int(t/5))]
    swell=min(1,t/2)*min(1,(20-t)/2)
    drone=sum(math.sin(2*math.pi*f*t)*0.10 for f in notes)
    pulse=(0.5+0.5*math.cos(2*math.pi*1.5*t))**6
    bass=0.17*math.sin(2*math.pi*(notes[0]/2)*t)*pulse
    shimmer=0.025*math.sin(2*math.pi*notes[2]*4*t)
    return (drone+bass+shimmer)*swell
def fx(t):
    impacts=[0,3.67,7.33,11,15]
    v=0
    for at in impacts:
        d=t-at
        if 0<=d<1.5:
            v+=0.42*math.exp(-7*d)*math.sin(2*math.pi*(70-22*d)*d)
            v+=0.10*math.exp(-10*d)*math.sin(2*math.pi*920*d)
    return v
write("public/cinematic.wav",bed)
write("public/impacts.wav",fx)
print("Generated original soundtrack and impact SFX.")
