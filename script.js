document.getElementById("generate").addEventListener("click", function() {
    const length = document.getElementById("length").value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    document.getElementById("password").textContent = password;
    document.getElementById("password").style.backgroundColor="white";
    document.getElementById("password").style.borderRadius="10px";
   

  });
  