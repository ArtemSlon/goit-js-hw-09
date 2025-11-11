const feedbackForm = document.querySelector(".feedback-form");
const textarea = feedbackForm.querySelector("textarea");
const storageKey = "feedback-form-state";

feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(feedbackForm);
    const values = {
        email: formData.get("email"),
        message: formData.get("message")
    }
     if (!values.email || !values.message) {
    alert("Fill please all fields");
    return; 
    }
    console.log(values);
    localStorage.removeItem(storageKey);
    feedbackForm.reset();
})
feedbackForm.addEventListener("input", ()=> {
    const formData = new FormData(feedbackForm);
    const values = {
        email: formData.get("email"),
        message: formData.get("message") 
    }
    saveInLS(storageKey, values);
})

document.addEventListener("DOMContentLoaded", () => {
    const data = loadFromLS(storageKey);
    if (!data) return;
    feedbackForm.elements.email.value = data.email || "";
    feedbackForm.elements.message.value = data.message || "";
    formData.email = data.email || "";
    formData.message = data.message || "";
})

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