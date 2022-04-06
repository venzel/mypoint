# VS Code Settings

[VS CODE](../VSCODE.md)

## Configurações

```json
{
    "workbench.tree.indent": 25,
    "vetur.ignoreProjectWarning": true,
    "material-icon-theme.folders.color": "#9A94E9",
    "material-icon-theme.folders.theme": "specific",
    "material-icon-theme.opacity": 1,
    "material-icon-theme.saturation": 1,
    "editor.mouseWheelScrollSensitivity": 2,
    "explorer.sortOrder": "default",
    "material-icon-theme.folders.associations": {
        "dashboard": "cluster",
        "avatar": "cluster", // images
        "user": "cluster",
        "product": "cluster",
        "payment": "cluster",
        "activity": "cluster",
        "address": "cluster",
        "telephone": "cluster",
        "history": "cluster",
        "email": "cluster",
        "order_item": "cluster",
        "profile": "cluster",
        "order": "cluster",
        "wizard": "cluster",
        "serie": "cluster",
        "season": "cluster",
        "episode": "cluster",
        "category": "cluster",
        "emotion": "cluster",
        "service": "cluster",
        "appointment": "cluster",
        "costumer": "cluster",
        "notification": "cluster",
        "authenticate": "cluster",
        "bullying": "cluster",
        "infra": "template",
        "entities": "class",
        "schemas": "class",
        "typeorm": "database",
        "repositories": "app",
        "implementations": "core",
        "services": "tools",
        "http": "animation",
        "migrations": "hook",
        "modules": "container",
        "helpers": "functions",
        "dto": "typescript",
        "fakes": "mock",
        "start": "delta",
        "init": "delta",
        "dtos": "typescript",
        "exceptions": "error",
        "jobs": "tasks",
        "libs": "utils"
    },
    // "vetur.format.defaultFormatter.html": "js-beautify-html",
    // "vetur.format.defaultFormatterOptions": {
    //     "wrap_attributes": "force-aligned",
    //     "prettyhtml": {
    //         "printWidth": 500,
    //         "singleQuote": false,
    //         "wrapAttributes": false,
    //         "sortAttributes": true,
    //         "useTabs": false,
    //         "proseWrap": "preserve"
    //     }
    // },
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.fontSize": 14,
    "editor.lineHeight": 21,
    "editor.fontWeight": "400",
    "editor.fontFamily": "JetBrains Mono Light",
    "editor.letterSpacing": -0.8,
    "editor.fontLigatures": true,
    "editor.rulers": [90, 100],
    "editor.formatOnSave": true, // alterado
    "editor.renderLineHighlight": "gutter",
    "editor.mouseWheelZoom": true,
    "prettier.semi": true,
    "prettier.tabWidth": 4,
    "prettier.printWidth": 90,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "es5",
    "prettier.ignorePath": ".prettierignore",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "terminal.integrated.fontSize": 8,
    "workbench.startupEditor": "newUntitledFile",
    "extensions.ignoreRecommendations": true,
    "typescript.suggest.paths": true,
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "njk": "html"
    },
    "javascript.updateImportsOnFileMove.enabled": "always",
    "git.enableSmartCommit": true,
    "editor.parameterHints.enabled": false,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "explorer.compactFolders": false,
    "explorer.confirmDragAndDrop": false,
    "explorer.confirmDelete": true,
    "typescript.tsserver.log": "verbose",
    "javascript.suggest.autoImports": true,
    "typescript.suggest.autoImports": true,
    "workbench.activityBar.visible": true,
    "editor.snippetSuggestions": "top",
    "javascript.format.placeOpenBraceOnNewLineForControlBlocks": true,
    "javascript.format.placeOpenBraceOnNewLineForFunctions": true,
    "editor.fastScrollSensitivity": 10,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.organizeImports": false //alterei
    },
    "editor.suggestSelection": "first",

    "editor.cursorBlinking": "expand",
    "workbench.iconTheme": "material-icon-theme",

    "editor.cursorSmoothCaretAnimation": true,
    "editor.cursorSurroundingLinesStyle": "all",
    // "code-runner.showExecutionMessage": false,

    // "java.configuration.checkProjectSettingsExclusions": false,
    // "java.home": "/opt/java/jdk",
    "git.autofetch": true,
    "terminal.explorerKind": "external",
    "editor.minimap.enabled": false,
    "editor.minimap.size": "proportional",
    "editor.minimap.scale": 3,
    "editor.minimap.side": "right",
    // "editor.minimap.showSlider": "mouseover",
    "editor.renderWhitespace": "none",
    "editor.renderControlCharacters": false,
    "java.project.importOnFirstTimeStartup": "automatic",
    "window.zoomLevel": 2,
    "git.confirmSync": false,
    "workbench.colorTheme": "Dracula Soft",
    "security.workspace.trust.untrustedFiles": "open",
    "bracketPairColorizer.depreciation-notice": false,
    "diffEditor.ignoreTrimWhitespace": false,
    "sonarlint.rules": {
        "javascript:S125": {
            "level": "off"
        },
        "typescript:S1186": {
            "level": "off"
        }
    }
}
```
