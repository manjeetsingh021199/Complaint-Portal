document.getElementById("grievanceForm").addEventListener("submit", function(event) {
  event.preventDefault();

  document.getElementById("responseMessage").style.display = "block";
  document.getElementById("responseMessage").innerHTML = `
    <h3>Thank you, Sehaj 💖</h3>
    <p>Your grievance has been sent to Ishan ❤️</p>
    <p>He will get back to you very soon! (He will think about it 😉)</p>
  `;
});
