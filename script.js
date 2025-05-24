document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Simple form validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const rating = document.getElementById("rating").value;

  if (!name || !email || !message || !rating) {
    alert("Please fill out all fields.");
    return;
  }

  // Simulate sending feedback
  document.querySelector(".feedback-form").style.display = "none";
  document.getElementById("thankYouMessage").classList.remove("hidden");
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email && password) {
    alert("Logged in successfully!");
    // Redirect or do something here
  } else {
    alert("Please enter both email and password.");
  }
});

    // Toggle payment fields based on selected method
    const paymentOptions = document.querySelectorAll('input[name="paymentMethod"]');
    const paymentDetails = document.getElementById("paymentDetails");

    paymentOptions.forEach((option) => {
      option.addEventListener("change", () => {
        if (option.value === "Credit Card") {
          paymentDetails.style.display = "block";
        } else {
          paymentDetails.style.display = "none";
        }
      });
    });

    // Auto-show credit card by default
    window.onload = () => {
      paymentDetails.style.display = "block";
    };

     // Toggle between login and signup forms
    document.getElementById('showSignup').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('loginFormWrapper').classList.add('hidden');
      document.getElementById('signupFormWrapper').classList.remove('hidden');
    });
    
    document.getElementById('showLogin').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('signupFormWrapper').classList.add('hidden');
      document.getElementById('loginFormWrapper').classList.remove('hidden');
    });
    
    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      // Add your login logic here
      alert('Login functionality would go here');
    });
    
    document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault();
      // Add your signup logic here
      alert('Signup functionality would go here');
    });