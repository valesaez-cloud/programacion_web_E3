function iniciarSesion() {
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();

  // evita enviar el formulario
  if (usuario === "" || clave === "") {
    alert("Debes completar todos los campos");
    return false; 
  }

  //usuario fijo
  if (usuario === "admin" && clave === "1234") {
    alert("Bienvenido, " + usuario + "!");
    
    // redirigir a index.html u otra página:
    window.location.href = "index.html";
    return false;
  } else {
    alert("Usuario o contraseña incorrectos");
    return false;
  }
}
