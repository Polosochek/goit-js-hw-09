document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".feedback-form");
  const STORAGE_KEY = "feedback-form-state";
  let formData = {
    email: "",
    message: ""
  };
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    formData = savedData;
    form.elements.email.value = savedData.email || "";
    form.elements.message.value = savedData.message || "";
  }
  form.addEventListener("input", (e) => {
    if (e.target.name) {
      formData[e.target.name] = e.target.value.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      alert("Fill please all fields");
      return;
    }
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: "", message: "" };
  });
});
