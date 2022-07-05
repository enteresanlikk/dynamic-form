const formData = {
    firstName: {
        HTMLElement: 'input',
        classList: 'form-control custom-input',
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter your first name',
        regex: [
            {
                pattern: '[A-Za-z]{3}',
                message: 'Three letter first name',
            }
        ],
        other: {
            required: true
        }
    },
    gender: {
        type: 'object',
        properties: {
            female: {
                HTMLElement: 'input',
                classList: 'form-control custom-radio',
                type: 'radio',
                label: 'Female',
                value: 1,
                other: {
                    required: true
                }
            },
            male: {
                HTMLElement: 'input',
                classList: 'form-control custom-radio',
                type: 'radio',
                label: 'Male',
                value: 2,
                other: {
                    required: true
                }
            }
        }
    },
    city: {
        HTMLElement: 'select',
        label: 'City',
        classList: 'form-control custom-select',
        options: [
            {
                value: '1',
                label: 'Option 1'
            },
            {
                value: '2',
                label: 'Option 2'
            }
        ]
    },
    summary: {
        HTMLElement: 'textarea',
        label: 'Summary',
        placeholder: 'Enter your summary...',
        value: 'This is a textarea',
        classList: 'form-control custom-textarea',
    },
    file: {
        HTMLElement: 'input',
        type: 'file',
        label: 'File',
        classList: 'form-control custom-file',
    },
    list: {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                firstName: {
                    HTMLElement: 'input',
                    classList: 'form-control custom-input',
                    type: 'text',
                    label: 'Name',
                },
                lastName: {
                    HTMLElement: 'input',
                    classList: 'form-control custom-input',
                    type: 'text',
                    label: 'Last Name',
                }
            }
        }
    },
    submit: {
        HTMLElement: 'button',
        classList: 'btn',
        type: 'submit',
        text: 'SUBMIT',
    },
};