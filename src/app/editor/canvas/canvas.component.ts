import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
import { STYLE_SELECTORS } from 'src/app/shared/style-selector';
import { BOOTSTRAP_COMPONENT_BLOCKS } from '../../components/bootstrap/blocks';
import { BASIC_ACTION_BUTTON } from '../../shared/action-buttons';
import { PANEL_SECTIONS } from '../../shared/panel-section';
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
        appendTo: '.bk__layers-container'
      },
      traitManager: {
        appendTo: '.bk__traits-container',
      },
      // We define a default panel as a sidebar to contain layers
      panels: {
        defaults: PANEL_SECTIONS
      },
      blockManager: {
        appendTo: '#blocks',
        blocks: BOOTSTRAP_COMPONENT_BLOCKS
      },
      selectorManager: {
        appendTo: '.bk__styles-container',
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
        appendTo: '.bk__styles-container',
        sectors: STYLE_SELECTORS
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
      el: '.bk__panel--top',
    });
    this.canvasEditor.Panels.addPanel({
      id: 'basic-actions',
      el: '.bk__panel--basic-actions',
      buttons: BASIC_ACTION_BUTTON,
    });

    /* Editor Commands */

    // Show blocks panel
    this.canvasEditor.Commands.add('show-blocks', {
      getTraitsEl(editor: any) {
        const row = editor.getContainer().closest('.bk__editor--row');
        return row.querySelector('#blocks');
      },
      run(editor: any, sender: any) {
        this.getTraitsEl(editor).style.display = '';
      },
      stop(editor: any, sender: any) {
        this.getTraitsEl(editor).style.display = 'none';
      },
    });

    // Show layers panel
    this.canvasEditor.Commands.add('show-layers', {
      getRowEl(editor: any) { return editor.getContainer().closest('.bk__editor--row'); },
      getLayersEl(row: any) { return row.querySelector('.bk__layers-container') },

      run(editor: any, sender: any) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = '';
      },
      stop(editor: any, sender: any) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
      },
    });

    // Show styles panel
    this.canvasEditor.Commands.add('show-styles', {
      getRowEl(editor: any) { return editor.getContainer().closest('.bk__editor--row'); },
      getStyleEl(row: any) { return row.querySelector('.bk__styles-container') },

      run(editor: any, sender: any) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
      },
      stop(editor: any, sender: any) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });

    // Show traits panel
    this.canvasEditor.Commands.add('show-traits', {
      getTraitsEl(editor: any) {
        const row = editor.getContainer().closest('.bk__editor--row');
        return row.querySelector('.bk__traits-container');
      },
      run(editor: any, sender: any) {
        this.getTraitsEl(editor).style.display = '';
      },
      stop(editor: any, sender: any) {
        this.getTraitsEl(editor).style.display = 'none';
      },
    });

    // Setting device view port
    this.canvasEditor.Commands.add('set-device-desktop', {
      run: (editor: any) => editor.setDevice('Desktop')
    });
    this.canvasEditor.Commands.add('set-device-mobile', {
      run: (editor: any) => editor.setDevice('Mobile')
    });
  }

}
