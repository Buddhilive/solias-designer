export const PANEL_SECTIONS = [
    {
        id: 'layers',
        el: '.bk__panel--right',
        // Make the panel resizable
        resizable: {
          maxDim: 350,
          minDim: 200,
          tc: 0, // Top handler
          cl: 1, // Left handler
          cr: 0, // Right handler
          bc: 0, // Bottom handler
          // Being a flex child we need to change `flex-basis` property
          // instead of the `width` (default)
          keyWidth: 'flex-basis',
        },
      }, {
        id: 'panel-switcher',
        el: '.bk__panel--switcher',
        buttons: [{
          id: 'show-blocks',
          active: true,
          label: `<span class="material-icons">grid_view</span>`,
          command: 'show-blocks',
          togglable: false,
        }, {
          id: 'show-layers',
          active: true,
          label: `<span class="material-icons">layers</span>`,
          command: 'show-layers',
          // Once activated disable the possibility to turn it off
          togglable: false,
        }, {
          id: 'show-style',
          active: true,
          label: `<span class="material-icons">format_paint</span>`,
          command: 'show-styles',
          togglable: false,
        }, {
          id: 'show-traits',
          active: true,
          label: `<span class="material-icons">settings</span>`,
          command: 'show-traits',
          togglable: false,
        }],
      }, {
        id: 'panel-devices',
        el: '.bk__panel--devices',
        buttons: [{
          id: 'device-desktop',
          label: `<span class="material-icons">computer</span>`,
          command: 'set-device-desktop',
          active: true,
          togglable: false,
        }, {
          id: 'device-mobile',
          label: `<span class="material-icons">smartphone</span>`,
          command: 'set-device-mobile',
          togglable: false,
        }],
      }
];