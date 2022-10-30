export const BASIC_ACTION_BUTTON = [
    {
        id: 'home',
        active: true, // active by default
        className: 'btn-toggle-borders',
        label: `<span class="material-icons">home</span>`,
    }, {
        id: 'visibility',
        active: true, // active by default
        className: 'btn-toggle-borders',
        label: `<span class="material-icons">border_style</span>`,
        command: 'sw-visibility', // Built-in command
    }, {
        id: 'export',
        className: 'btn-open-export',
        label: `<span class="material-icons">code</span>`,
        command: 'export-template',
        context: 'export-template', // For grouping context of buttons from the same panel
    }, {
        id: 'show-json',
        className: 'btn-show-json',
        label: `<span class="material-icons">data_object</span>`,
        context: 'show-json',
        command(editor: any) {
            editor.Modal.setTitle('Components JSON')
                .setContent(`<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`)
                .open();
        },
    }, {
        id: 'preview',
        className: 'btn-open-preview',
        label: `<span class="material-icons">visibility</span>`,
        command: 'preview',
    }
];