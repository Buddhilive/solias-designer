import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
import { BOOTSTRAP_COMPONENT_BLOCKS } from '../../components/bootstrap/blocks';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  canvasEditor: any;

  constructor() { }

  ngOnInit(): void {
    this.canvasEditor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: 'calc(100vh - 40px)',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      layerManager: {
        appendTo: '.layers-container'
      },
      traitManager: {
        appendTo: '.traits-container',
      },
      // We define a default panel as a sidebar to contain layers
      panels: {
        defaults: [{
          id: 'layers',
          el: '.panel__right',
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
          el: '.panel__switcher',
          buttons: [{
            id: 'show-blocks',
            active: true,
            label: 'blocks',
            command: 'show-blocks',
            togglable: false,
          }, {
            id: 'show-layers',
            active: true,
            label: 'Layers',
            command: 'show-layers',
            // Once activated disable the possibility to turn it off
            togglable: false,
          }, {
            id: 'show-style',
            active: true,
            label: 'Styles',
            command: 'show-styles',
            togglable: false,
          }, {
            id: 'show-traits',
            active: true,
            label: 'Traits',
            command: 'show-traits',
            togglable: false,
          }],
        }, {
          id: 'panel-devices',
          el: '.panel__devices',
          buttons: [{
            id: 'device-desktop',
            label: 'D',
            command: 'set-device-desktop',
            active: true,
            togglable: false,
          }, {
            id: 'device-mobile',
            label: 'M',
            command: 'set-device-mobile',
            togglable: false,
          }],
        }]
      },
      blockManager: {
        appendTo: '#blocks',
        blocks: BOOTSTRAP_COMPONENT_BLOCKS
      }, selectorManager: {
        appendTo: '.styles-container'
      },
      deviceManager: {
        devices: [{
            name: 'Desktop',
            width: '', // default size
          }, {
            name: 'Mobile',
            width: '320px', // this value will be used on canvas width
            widthMedia: '480px', // this value will be used in CSS @media
        }]
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [{
          name: 'Dimension',
          open: false,
          // Use built-in properties
          buildProps: ['width', 'min-height', 'padding'],
          // Use `properties` to define/override single property
          properties: [
            {
              // Type of the input,
              // options: integer | radio | select | color | slider | file | composite | stack
              type: 'integer',
              name: 'The width', // Label for the property
              property: 'width', // CSS property (if buildProps contains it will be extended)
              units: ['px', '%'], // Units, available only for 'integer' types
              defaults: 'auto', // Default value
              min: 0, // Min value, available only for 'integer' types
            }
          ]
        }, {
          name: 'Extra',
          open: false,
          buildProps: ['background-color', 'box-shadow', 'custom-prop'],
          properties: [
            {
              id: 'custom-prop',
              name: 'Custom Label',
              property: 'font-size',
              type: 'select',
              defaults: '32px',
              // List of options, available only for 'select' and 'radio'  types
              options: [
                { value: '12px', name: 'Tiny' },
                { value: '18px', name: 'Medium' },
                { value: '32px', name: 'Big' },
              ],
            }
          ]
        }]
      },
      canvas: {
        styles: [
          'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
          'https://fonts.googleapis.com/icon?family=Material+Icons',
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap'
        ]
      },
    });

    this.canvasEditor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });
    this.canvasEditor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'home',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: '<a href="https://www.buddhilive.com" target="_blank">H</a>',
        }, 
        {
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: '<u>B</u>',
          command: 'sw-visibility', // Built-in command
        }, {
          id: 'export',
          className: 'btn-open-export',
          label: 'Exp',
          command: 'export-template',
          context: 'export-template', // For grouping context of buttons from the same panel
        }, {
          id: 'show-json',
          className: 'btn-show-json',
          label: 'JSON',
          context: 'show-json',
          command(editor: any) {
            editor.Modal.setTitle('Components JSON')
              .setContent(`<textarea style="width:100%; height: 250px;">
                ${JSON.stringify(editor.getComponents())}
              </textarea>`)
              .open();
          },
        }
      ],
    });

    // Define commands
    this.canvasEditor.Commands.add('show-blocks', {
      getTraitsEl(editor: any) {
        const row = editor.getContainer().closest('.editor-row');
        return row.querySelector('#blocks');
      },
      run(editor: any, sender: any) {
        this.getTraitsEl(editor).style.display = '';
      },
      stop(editor: any, sender: any) {
        this.getTraitsEl(editor).style.display = 'none';
      },
    });

    this.canvasEditor.Commands.add('show-layers', {
      getRowEl(editor: any) { return editor.getContainer().closest('.editor-row'); },
      getLayersEl(row: any) { return row.querySelector('.layers-container') },

      run(editor: any, sender: any) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = '';
      },
      stop(editor: any, sender: any) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
      },
    });

    this.canvasEditor.Commands.add('show-styles', {
      getRowEl(editor: any) { return editor.getContainer().closest('.editor-row'); },
      getStyleEl(row: any) { return row.querySelector('.styles-container') },

      run(editor: any, sender: any) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
      },
      stop(editor: any, sender: any) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });

    this.canvasEditor.Commands.add('show-traits', {
      getTraitsEl(editor: any) {
        const row = editor.getContainer().closest('.editor-row');
        return row.querySelector('.traits-container');
      },
      run(editor: any, sender: any) {
        this.getTraitsEl(editor).style.display = '';
      },
      stop(editor: any, sender: any) {
        this.getTraitsEl(editor).style.display = 'none';
      },
    });

    this.canvasEditor.Commands.add('set-device-desktop', {
      run: (editor: any) => editor.setDevice('Desktop')
    });
    this.canvasEditor.Commands.add('set-device-mobile', {
      run: (editor: any) => editor.setDevice('Mobile')
    });
  }

}
