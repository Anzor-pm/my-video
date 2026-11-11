# Prado luxury video editor — agent instructions
Primary renderer: **Remotion**. Do not use FFmpeg to edit, composite, or render videos. FFprobe may be used for media inspection only.

## User workflow
User describes desired style in Tajik and supplies media. The assistant updates Remotion compositions, captions, audio and GitHub Actions. Media transfer from ChatGPT attachments to this repository is **not automated**; do not pretend files are present. Do not publish user media in this public repository.

## Creative defaults
- 20s vertical 2160x3840, 120 fps when practical
- Premium black/gold palette, elegant glassmorphism caption plates, soft blur, tasteful highlights
- Tajik subtitles, correct spelling, synchronized with actual voice or provided transcript
- Male Tajik voiceover only with commercial usage rights
- Cinematic audio, no copyrighted music without license
- Use Remotion for all visual timeline work
- 120fps output does not turn low-fps input into genuine 120fps motion

## Quality checklist
1. Confirm all input media available.
2. Make edit plan with clip timing, text, audio and transitions.
3. Validate subtitle timing and spelling.
4. Check render in 1080p preview before 4K/120fps final.
5. Verify MP4 duration, dimensions, FPS and audio.
6. Share artifact only after a successful actual render.

## Agent skills
Official: https://github.com/remotion-dev/skills
Optional: https://github.com/veedstudio/open-edit
Analysis: https://github.com/gitethanwoo/video-editing

To install the official Remotion skills in a compatible agent environment:
`npx skills add remotion-dev/skills`
This is a setup instruction, not proof the skills are installed.
