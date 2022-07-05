class DynamicForm {
  constructor(formElement, formData) {
    this.formElement = formElement;
    this.formData = formData;
  }

  init() {
    const htmls = this.createRows(this.formData);
    const html = this.render(htmls);

    this.formElement.innerHTML = html.join('');
  }

  createRows(schema, accKey = '') {
    return Object.entries(schema).map(([key, value], index) => {
      let newAccKey = key;
      let parentAccKey = newAccKey;
      if (accKey) {
        newAccKey = `${accKey}_${key}`;
        parentAccKey = newAccKey;
        if (parentAccKey.indexOf('_') !== -1) {
          const splittedData = parentAccKey.split('_');
          parentAccKey = splittedData
            .slice(0, splittedData.length - 1)
            .join('_');
        }
      }

      if (value.type === 'object') {
        return this.createRows(value.properties, newAccKey);
      } else if (value.type === 'array') {
        return this.createRows(
          {
            [newAccKey]: value.items,
          },
          newAccKey
        );
      } else {
        return this.createField(parentAccKey, newAccKey, value);
      }
    });
  }

  createField(
    parentKey,
    key,
    { HTMLElement, classList, type, label, placeholder, options, value, regex, text, other }
  ) {
    const rowElement = document.createElement('div');

    const element = document.createElement(HTMLElement);
    element.setAttribute('id', key);
    element.setAttribute('name', parentKey);

    if (classList) {
        classList.split(' ').map(className => element.classList.add(className));
    }

    if(regex) {
        regex.map(({ pattern, message }) => {
            element.setAttribute('pattern', pattern);
            element.setAttribute('title', message);
        });
    }

    if (type) element.setAttribute('type', type);
    if (value) element.setAttribute('value', value);
    if (placeholder) element.setAttribute('placeholder', placeholder);
    if (text) element.innerHTML = text;

    if (options) {
        options.map((option) => {
            const optionElement = document.createElement('option');
            optionElement.setAttribute('value', option.value);
            optionElement.innerHTML = option.label;
            element.appendChild(optionElement);
        });
    }

    if(other) {
        Object.keys(other).map(key => {
            element.setAttribute(key, other[key]);
        });
    }

    if (label) {
      const labelElement = document.createElement('label');
      labelElement.innerHTML = label;
      labelElement.setAttribute('for', key);
      rowElement.appendChild(labelElement);
    }

    rowElement.appendChild(element);

    return rowElement.innerHTML;
  }

  render(html) {
    return html.map(row => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');

        if(typeof row === 'object') {
            rowElement.classList.add('grouped');
            rowElement.innerHTML = this.render(row).join('');
        } else {
            rowElement.innerHTML = row;
        }
        return rowElement.outerHTML;
    });
  }
}
