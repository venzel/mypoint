# VS Code Keybinds

[VS CODE](../VSCODE.md)

## Configurações

```json
[
    {
        "key": "ctrl+k c",
        "command": "-workbench.files.action.compareWithClipboard"
    },
    {
        "key": "ctrl+shift+down",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+d",
        "command": "duplicate.execute"
    },
    {
        "key": "ctrl+shift+alt+down",
        "command": "-editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+up",
        "command": "editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+alt+up",
        "command": "-editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+'",
        "command": "workbench.action.terminal.toggleTerminal"
    },
    {
        "key": "ctrl+shift+[BracketLeft]",
        "command": "-workbench.action.terminal.toggleTerminal"
    },
    {
        "key": "ctrl+m",
        "command": "bookmarks.toggle",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+k",
        "command": "-bookmarks.toggle",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+numpad_divide",
        "command": "editor.action.commentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+/",
        "command": "-editor.action.commentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+k ctrl+u",
        "command": "-editor.action.removeCommentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+/",
        "command": "editor.action.addCommentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+k ctrl+c",
        "command": "-editor.action.addCommentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+up",
        "command": "workbench.files.action.collapseExplorerFolders"
    },
    {
        "key": "ctrl+shift+alt+i",
        "command": "-emojisense.quickEmojitextTerminal",
        "when": "terminalFocus"
    },
    {
        "key": "ctrl+i",
        "command": "-emojisense.quickEmoji",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+i",
        "command": "-emojisense.quickEmojiTerminal",
        "when": "terminalFocus"
    },
    {
        "key": "ctrl+k s",
        "command": "workbench.action.files.saveFiles"
    },
    {
        "key": "ctrl+shift+i",
        "command": "-emojisense.quickEmojitext",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+h d",
        "command": "hacker_sounds.disable"
    },
    {
        "key": "shift+h e",
        "command": "hacker_sounds.enable"
    },
    {
        "key": "shift+h down",
        "command": "hacker_sounds.volumeDown"
    },
    {
        "key": "shift+h up",
        "command": "hacker_sounds.volumeUp"
    },
    {
        "key": "ctrl+d",
        "command": "-extension.autodocblocker",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+p",
        "command": "workbench.action.pinEditor",
        "when": "!activeEditorIsPinned"
    },
    {
        "key": "ctrl+k shift+enter",
        "command": "-workbench.action.pinEditor",
        "when": "!activeEditorIsPinned"
    },
    {
        "key": "alt+p",
        "command": "workbench.action.unpinEditor",
        "when": "activeEditorIsPinned"
    },
    {
        "key": "ctrl+k shift+enter",
        "command": "-workbench.action.unpinEditor",
        "when": "activeEditorIsPinned"
    },
    {
        "key": "alt+q",
        "command": "workbench.action.closeWindow",
        "when": "!editorIsOpen && !multipleEditorGroups"
    },
    {
        "key": "ctrl+w",
        "command": "-workbench.action.closeWindow",
        "when": "!editorIsOpen && !multipleEditorGroups"
    },
    {
        "key": "alt+q",
        "command": "workbench.action.closeGroup",
        "when": "activeEditorGroupEmpty && multipleEditorGroups"
    },
    {
        "key": "ctrl+w",
        "command": "-workbench.action.closeGroup",
        "when": "activeEditorGroupEmpty && multipleEditorGroups"
    },
    {
        "key": "ctrl+shift+i",
        "command": "editor.action.organizeImports",
        "when": "editorTextFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)source\\.organizeImports\\b/"
    },
    {
        "key": "shift+alt+o",
        "command": "-editor.action.organizeImports",
        "when": "editorTextFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)source\\.organizeImports\\b/"
    },
    {
        "key": "ctrl+alt+h",
        "command": "extension.git-file-history"
    },
    {
        "key": "ctrl+alt+p",
        "command": "extension.presentationMode"
    },
    {
        "key": "ctrl+tab",
        "command": "workbench.action.quickOpenNavigateNextInEditorPicker",
        "when": "inEditorsPicker && inQuickOpen"
    },
    {
        "key": "ctrl+tab",
        "command": "-workbench.action.quickOpenNavigateNextInEditorPicker",
        "when": "inEditorsPicker && inQuickOpen"
    },
    {
        "key": "ctrl+tab",
        "command": "-workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup"
    },
    {
        "key": "ctrl+up",
        "command": "-notebook.cell.focusOutOutput",
        "when": "notebookEditorFocused"
    },
    {
        "key": "ctrl+shift+up",
        "command": "-editor.action.insertCursorAbove",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+up",
        "command": "incrementor.incrementByOne"
    },
    {
        "key": "ctrl+up",
        "command": "-incrementor.incrementByOne"
    },
    {
        "key": "ctrl+shift+s",
        "command": "extension.splitHTMLAttributes",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+alt+a",
        "command": "-extension.splitHTMLAttributes",
        "when": "editorTextFocus && !editorReadonly"
    }
]
```
