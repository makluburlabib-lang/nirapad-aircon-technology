// IMPORTANT: Before publishing, replace the placeholder email below with the real business email.
const BUSINESS_EMAIL = "REPLACE-WITH-YOUR-BUSINESS-EMAIL@example.com";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("enquiry-form");
form?.addEventListener("submit", event => {
  event.preventDefault();
  const note = document.getElementById("form-note");
  if (BUSINESS_EMAIL.includes("REPLACE-WITH-YOUR-BUSINESS-EMAIL")) {
    note.textContent = "Demo form only: add your real business email in script.js before using this form.";
    return;
  }
  const data = new FormData(form);
  const subject = encodeURIComponent(`Website enquiry: ${data.get("service")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nContact: ${data.get("contact")}\nService: ${data.get("service")}\nMessage: ${data.get("message") || "(not provided)"}`
  );
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  note.textContent = "Your email app should open with the enquiry prepared. Please send it from there.";
});