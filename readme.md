# Reveal In Finder

This is a little hack that I did so I could map a key binding to reveal the current file in finder.

Map it like:

```
'atom-workspace':
  'alt-cmd-c': 'reveal-in-finder:reveal'
```  

I have not done any form of thorough testing, I only know it works on my machine (Mac OS running High Seirra). The whole thing relies on running a child process for `open '<DIRECTORY>'` so if that command does not work in your terminal then _this package is not for you_.

## Install

One day I'll put this on the marketplace but in the meantime:

```sh
git clone https://github.com/nolanbconaway/atom-reveal-in-finder.git
cd atom-reveal-in-finder
apm install
apm link .
```
