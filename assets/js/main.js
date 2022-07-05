document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('#dynamicForm');
    const dynamicForm = new DynamicForm(element, formData);

    dynamicForm.init();
});