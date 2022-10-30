export const BOOTSTRAP_COMPONENT_BLOCKS = [
  {
    id: 'button',
    label: `<span class="material-icons">smart_button</span><span class="block-label">Button</span>`,
    content: '<button type="button" class="btn btn-primary">Primary</button>',
    category: 'Basic'
  },{
    id: 'label',
    label: `<span class="material-icons">label</span><span class="block-label">Label</span>`,
    content: '<label>Label</label>',
    category: 'Basic'
  },{
    id: 'link',
    label: `<span class="material-icons">link</span><span class="block-label">Link</span>`,
    content: '<a href="#">Link</a>',
    category: 'Basic'
  }, {
    id: 'row',
    label: `<span class="material-icons">table_rows</span><span class="block-label">Row</span>`,
    content: '<div class="row"></div>',
    category: 'Layout'
  }, {
    id: 'column',
    label: `<span class="material-icons">view_column</span><span class="block-label">Column</span>`,
    content: '<div class="col"></div>',
    category: 'Layout'
  }, {
    id: 'container',
    label: `<span class="material-icons">web_assest</span><span class="block-label">Container</span>`,
    content: '<div class="container"></div>',
    category: 'Layout'
  }, {
    id: 'text-input',
    label: `<span class="material-icons">text_fields</span><span class="block-label">Text Input</span>`,
    content: '<input type="text" class="form-control" placeholder="">',
    category: 'Forms'
  },{
    id: 'email-input',
    label: `<span class="material-icons">alternate_email</span><span class="block-label">Email Input</span>`,
    content: '<input type="email" class="form-control" placeholder="">',
    category: 'Forms'
  },{
    id: 'checkbox',
    label: `<span class="material-icons">check_box</span><span class="block-label">Checkbox</span>`,
    content: `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      Default checkbox
    </label>
  </div>`,
    category: 'Forms'
  },{
    id: 'radio',
    label: `<span class="material-icons">radio_button_checked</span><span class="block-label">Checkbox</span>`,
    content: `<div class="form-check">
    <input class="form-radio-input" type="radio" value="" id="flexRadioDefault">
    <label class="form-radio-label" for="flexRadioDefault">
      Default Radio
    </label>
  </div>`,
    category: 'Forms'
  },{
    id: 'range',
    label: `<span class="material-icons">tune</span><span class="block-label">Range</span>`,
    content: '<input type="range" class="form-range">',
    category: 'Forms'
  },{
    id: 'select',
    label: `<span class="material-icons">menu_open</span><span class="block-label">Select</span>`,
    content: `<select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>`,
    category: 'Forms'
  }, {
    id: 'navbar',
    label: `<span class="material-icons">dashboard</span><span class="block-label">Navbar</span>`,
    content: `<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`,
    category: 'Forms'
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