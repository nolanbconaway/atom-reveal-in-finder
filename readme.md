# Reveal In Finder

This is a little hack that I did so I could map a key binding to reveal
the current file in finder. Its pretty minimal and it wouldn't be hard to
generalize if only there was a software developer around.

Map it like:

```
'atom-text-editor':
  'alt-cmd-r': 'reveal-in-finder:reveal'
```

Then hit that puppy to reveal the current file's parent directory in a
Finder window.

I have not done any form of thorough testing, I only know it works on my
machine (Mac OS running High Sierra). The whole thing relies on running a
child process for `open '<DIRECTORY>'` so if that command does not work in
your terminal then _this package is not for you_.

## Install

It's on the marketplace, so the regular channels should work.



If not, see the
hack below.


### Hack Install

I did this before I published to the marketplace.

```sh
cd ~/.atom/packages
git clone https://github.com/nolanbconaway/atom-reveal-in-finder.git
cd atom-reveal-in-finder
apm install
apm link .
```
