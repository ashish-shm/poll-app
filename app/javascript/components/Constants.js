export default {
  Headers: {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
  },
};
