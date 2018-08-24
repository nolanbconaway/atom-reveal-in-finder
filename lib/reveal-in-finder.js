'use babel';

import { CompositeDisposable } from 'atom';

var path = require("path");
var sys = require('util')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout) }
// exec("ls -la", puts);

export default {

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'reveal-in-finder:reveal': () => this.reveal()
    }));
  },

  reveal() {
    editor = atom.workspace.getActivePaneItem();

    // return if no buffer
    if (typeof(editor.buffer) != 'object') {
        return
    }
    let parent_dir = path.resolve(__dirname, editor.buffer.file.path, '..');
    exec(`open '${parent_dir}'`, puts);
  }

};
