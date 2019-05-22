import React from 'react';

export interface FormFieldProps {
  id: string;
  formData: {
    element: string;
    value: string;
    config: {
      name: string;
      type: string;
      placeholder: string;
    },
    validation: {
      required: boolean;
      email: boolean;
    },
    valid: boolean;
    touched: boolean;
    validationMessage: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = (props: FormFieldProps) => {
  const { id, formData, onChange } = props;

  function renderTemplate() {
    const emptyFragment = <></>;
    let formTemplate = emptyFragment;

    function handleBlur(event: React.FormEvent) {

    }

    function handleChange(event: React.FormEvent) {

    }

    switch (formData.element) {
      case 'input':
        formTemplate = (
          <div className="formBlock">
            <input type="text"
              {...formData.config}
              value={formData.value}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
        );
        break;
      default: formTemplate = emptyFragment;
    }

    return formTemplate;
  }

  return (
    <div>
      {renderTemplate()}
    </div>
  );
};

export default FormField;