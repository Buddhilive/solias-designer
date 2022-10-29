export const BOOTSTRAP_COMPONENT_BLOCKS = [
  {
    id: 'button',
    label: `<span class="material-icons">smart_button</span><span class="block-label">Button</span>`,
    content: '<button type="button">Primary</button>',
    attributes: {
      class: "btn btn-primary"
    },
    category: 'Basic'
  }, {
    id: 'image',
    label: `<span class="material-icons">image</span><span class="block-label">Image</span>`,
    // Select the component once it's dropped
    select: true,
    // You can pass components as a JSON instead of a simple HTML string,
    // in this case we also use a defined component type `image`
    content: { type: 'image' },
    // This triggers `active` event on dropped components and the `image`
    // reacts by opening the AssetManager
    activate: true,
    category: 'Media'
  }
];