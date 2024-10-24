let formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', populateForm);

form.addEventListener('input', ({ target: { name, value } }) => {
    formData[name] = value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();

    const { email, message } = formData;
    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    resetForm();
});

function populateForm() {
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
        formData = JSON.parse(savedData);
        Object.entries(formData).forEach(([key, value]) => {
            form.elements[key].value = value || ''; 
        });
    }
}

function resetForm() {
    localStorage.removeItem(storageKey);
    form.reset();
    formData = { email: '', message: '' }; 
}
