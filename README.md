# Toyota Prado — Remotion cinematic ad

20-second vertical ad, 120 fps. Remotion source in `src/`. Price: **210 000 сомонӣ**.

## Required original photos
Upload to `public/`:
- `front.jpg`
- `angle.jpg`
- `interior.jpg`
- `rear.jpg`

## Audio
`python3 scripts/make_audio.py` generates original cinematic instrumental and transition impacts, without an API key.
For a natural male Tajik commercial voiceover, record or obtain a **commercially licensed** recording and upload it as `public/voice.wav`. Uncomment the voice `Audio` element in `src/audio.tsx`.
The Meta MMS-TTS Tajik model is CC BY-NC 4.0, so it is **not used** in this commercial ad.

## Local / Codespaces
```bash
npm install
python3 scripts/make_audio.py
npm start
```

## 4K render in GitHub Actions
Open **Actions → Render Prado 4K → Run workflow → 4K**. The workflow requires all four images and then generates the music/SFX and renders 2160×3840 MP4. Download the result from **Artifacts**. Runner minutes and storage may count toward GitHub quotas. 4K is output resolution; source photos determine actual detail.

No actual MP4 or voiceover is included until the workflow succeeds and voice is supplied.
