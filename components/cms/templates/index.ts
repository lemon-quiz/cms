import {
  PageInterface,
} from '../interfaces/template.interface';

const page: PageInterface = [
  {
    name: 'Meta',
    type: 'complex',
    zakje: 'wassen',
    mandatory: true,
    export: ['default', 'index'],
    users: [],
    roles: [],
    children: [
      {
        type: 'line', name: 'page_title', mandatory: true, multiple: true, validator: 'isEmail',
      },
      { type: 'radio', name: 'radio', mandatory: true },
      { type: 'checkbox', name: 'checkbox', mandatory: true },
      { type: 'checkbox', name: 'simba' },
      { type: 'line', name: 'url', validator: ['isFQDN'] },
    ],
  },
  {
    name: 'Body',
    type: 'complex',
    mandatory: true,
    children: [
      { type: 'line', name: 'page_title' },
      {
        type: 'complex',
        name: 'paragraph',
        mandatory: true,
        multiple: true,
        children: [
          { type: 'line', name: 'title', mandatory: true },
          { type: 'line', name: 'text' },
          { type: 'line', name: 'subscript', mandatory: true },
        ],
      },
    ],
  },
];

export default page;
