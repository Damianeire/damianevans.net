---
layout: ../layouts/Page.astro
title: Projects
description: Free tools for musicians and chess players built by Damian Evans, mostly as Obsidian plugins.
intro: I've always been into programming of sorts. From my Commodore 64 BASIC days. I never made anything significant, but I think my first utilities were DOC batch files. Fast forward to 2010 or so and my first Mac, then to Keyboard Maestro, and me hacking together automations. I even had a small business made around one. Now Claude lets me build small tools just for me. Most are plugins for Obsidian which I use for learning and playing traditional Irish music.
---

<ul class="entries">
<li>

### Tune Finder

An Obsidian plugin that identifies traditional tunes in your own recordings. It listens, transcribes the melody and searches the tune collection on [thesession.org](https://thesession.org) for the closest match, along the lines of FolkFriend or Tunepal. It works best one tune at a time, so it pairs well with the two tools below.

<p class="links"><a href="https://github.com/Damianeire/obsidian-tune-finder">Source on GitHub</a></p>
</li>
<li>

### trad-split

Takes a recording of a whole session, such as a phone voice memo, and splits it into the sets of tunes and the chat in between. It writes out each set as its own audio file, along with a Reaper project for checking the cuts and an Obsidian note ready for tune names. It uses a neural network trained to tell music from speech.

<p class="links"><a href="https://github.com/Damianeire/Automatic_Audio_Splitter">Source on GitHub</a></p>
</li>
<li>

### Audio Loop Player

An Obsidian plugin for practising along with recordings. It has named A to B loop sections, an optional pause between repeats, and a speed slider. Sections are saved for each file, so they're still there next time.

<p class="links"><a href="https://github.com/Damianeire/obsidian-mp3-player">Source on GitHub</a></p>
</li>
<li>

### ABC Sol-fa

An Obsidian plugin that shows tunes written in ABC notation with sol-fa syllables under the notes and Kodály stick notation above them, for teaching tunes by ear.

<p class="links"><a href="https://github.com/Damianeire/obsidian-abc-solfa">Source on GitHub</a></p>
</li>
<li>

### Chromatic Tuner

A tuner inside Obsidian for guitar, bass, tenor banjo, mandolin, violin or cello, plus a chromatic mode for anything else. You pick the microphone, and the audio never leaves your device.

<p class="links"><a href="https://github.com/Damianeire/obsidian-chromatic-tuner">Source on GitHub</a></p>
</li>
<li>

### PGN Speak

Reads a chess game aloud, move by move, for practising blindfold chess. Paste in a game or a Lichess link and listen. It started as a Keyboard Maestro macro and is now a web page that runs entirely in the browser, with an Obsidian version too.

<p class="links"><a href="https://pgn.damianevans.net">Try it</a> · <a href="https://github.com/Damianeire/pgn-speak">Source</a> · <a href="https://github.com/Damianeire/obsidian-pgn-speak">Obsidian plugin</a></p>
</li>
<li>

### Poker Odds Trainer

A web app for drilling the maths of Texas Hold'em: outs, equity, pot odds. Every number on screen is worked out live, and each one can show its working.

<p class="links"><a href="https://github.com/Damianeire/poker-odds-app">Source on GitHub</a></p>
</li>
</ul>
