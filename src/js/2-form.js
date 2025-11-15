const feedbackForm = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";
let formData = {
  email: "",
  message: ""
};
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);
  localStorage.removeItem(storageKey);
  feedbackForm.reset();
  formData = { email: "", message: "" };
});
feedbackForm.addEventListener("input", (e) => {
  formData[e.target.name] = e.target.value.trim(); 
    saveInLS(storageKey, formData);
});

document.addEventListener("DOMContentLoaded", () => {
    const savedData = loadFromLS(storageKey);
    if (savedData) {
        formData = savedData;
        feedbackForm.elements.email.value = formData.email || "";
        feedbackForm.elements.message.value = formData.message || "";
    }
});

function saveInLS(key, value) {
    const zip = JSON.stringify(value);
    localStorage.setItem(key, zip) 
}
function loadFromLS(key) {
    const zip = localStorage.getItem(key);
    try {
        const value = JSON.parse(zip);
        return value;
    }
    catch {
        return zip;
    }
}