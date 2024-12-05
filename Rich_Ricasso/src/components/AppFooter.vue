<template>

</template>

<script>

</script>

<style>
/* Footer Container */
.footer {
  background-color: rgba(128, 0, 128, 0.7);
  /* Transparent purple */
  color: white;
  text-align: center;
  padding: 20px 0;
}

/* Center Content */
.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

/* Newsletter Form */
.newsletter-form {
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

input[type="email"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #6200ea;
  /* Purple button */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #4a00c2;
  /* Darker purple on hover */
}

/* Popup Message */
.popup-message {
  margin-top: 15px;
  color: #90ee90;
  /* Light green for confirmation */
  font-size: 14px;
  animation: fadeInOut 3s ease;
}

/* Copyright Text */
.copyright {
  margin-top: 10px;
  font-size: 14px;
}

/* Animations */
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
