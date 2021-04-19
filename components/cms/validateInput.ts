import validatorLib from 'validator';

import { NodeType, ValidatiorOptions } from './interfaces/template.interface';

export default function validateInput(node: NodeType, value: string) {
  let { validator } = node;

  if (typeof validator === 'undefined') {
    return null;
  }

  if (!Array.isArray(validator)) {
    validator = [validator];
  }

  const errors: any = {};

  validator.forEach((validationRule: string) => {
    let rule = validationRule;
    let params = [];
    if (typeof validationRule === 'object') {
      rule = (validationRule as ValidatiorOptions).rule;
      params = (validationRule as ValidatiorOptions).params;
    }

    if (typeof validatorLib[rule] === 'undefined') {
      console.error(`Validation rule ${rule} was not found in the validator library`);
      return;
    }

    if (!validatorLib[rule](value, ...params)) {
      errors[validationRule] = false;
    }
  });

  return Object.keys(errors).length === 0 ? null : errors;
}
