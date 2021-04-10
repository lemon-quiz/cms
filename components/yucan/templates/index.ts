import {
  PageInterface,
} from '../interfaces/template.interface';

const page: PageInterface = [
  {
    name: 'answer_model',
    type: 'page',
    exportHandler: ['AnswerModelExporter'],
  },
  {
    name: 'Meta',
    type: 'complex',
    zakje: 'wassen',
    mandatory: true,
    children: [
      {
        type: 'line', name: 'page_title', mandatory: true, multiple: true,
      },
      { type: 'radio', name: 'radio', mandatory: true },
      { type: 'checkbox', name: 'checkbox', mandatory: true },
      { type: 'checkbox', name: 'simba' },
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
