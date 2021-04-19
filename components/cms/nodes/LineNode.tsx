import {
  FormControl,
  FormHelperText, Input,
  InputLabel,
} from '@material-ui/core';
import {
  ChangeEvent, useContext, useEffect, useState,
} from 'react';

import { PageContext, PageContextInterface } from '../../../pages/cms/page';
import { NodeType } from '../interfaces/template.interface';
import validateInput from '../validateInput';

export default function LineNode({ node }: { node: NodeType }) {
  const pageContext = useContext<PageContextInterface>(PageContext);
  const [value, setValue] = useState<any>('');
  const [errors, setErrors] = useState<any>(null);

  useEffect(() => {
    if (typeof node.value !== 'undefined') {
      const {
        value: defaultValue,
        errors: defaultErrors,
      } = pageContext.getValue(node.uuid, node.value);

      setValue(defaultValue);
      setErrors(defaultErrors);
    }
  }, []);

  const updateValue = (change: ChangeEvent<HTMLInputElement>) => {
    const { target: { value: newValue } } = change;
    const inputErrors = validateInput(node, newValue);

    pageContext.setValue(node.uuid, newValue, inputErrors);
    setValue(newValue);
    setErrors(inputErrors);
  };

  return (
    <>
      <FormControl error={errors !== null} fullWidth>
        <InputLabel htmlFor={`input-${node.uuid}`}>{node.name}</InputLabel>
        <Input
          id={`input-${node.uuid}`}
          value={value}
          onChange={updateValue}
          aria-describedby={`input-${node.uuid}-error`}
        />
        {errors !== null && (
          <FormHelperText id={`input-${node.uuid}-error`}>
            {Object.keys(errors).map((error) => (
              <span
                key={`${node.uuid}-${error}`}
              >
                {error}
              </span>
            ))}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
}
