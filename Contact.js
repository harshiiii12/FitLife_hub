document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from reloading page

  // Get input values (optional validation)
  let name = document.querySelector('input[placeholder="Name"]').value;
  let email = document.querySelector('input[placeholder="Email"]').value;
  let phone = document.querySelector('input[placeholder="Phone number"]').value;
  let comment = document.querySelector('textarea[placeholder="Comment"]').value;

  // Simple validation
  if (name === "" || email === "" || phone === "" || comment === "") {
    alert("Please fill all fields!");
    return;
  }

  // Success message
  document.getElementById("successMessage").style.display = "block";

  // Optional: Reset form after submit
  document.getElementById("contactForm").reset();

  let phone = document.querySelector(
    'input[placeholder="Phone number *"]',
  ).value;

  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }
});
