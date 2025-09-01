console.log("recu_cuenta.s cargado"

$(function () {
  $("#recuperarForm").on("submit", 
    if ($form.length ===0) {
    console.warn("no se encontro");
    return;

    let isValid = true;

    // limpiar estado previo
    $form.find("#.error-message").hide().text("");
    $form.find("#.form-control").removeClass("is-invalid");

    // === validar CORREO ===
    const $mail = $("#mail");  
    const correo = $mail.val().trim();

    if (correo === "") {
      $mail.addClass("is-invalid");
      $mail.next(".error-message").text("El correo es obligatorio.").show();
      isValid = false;
    } else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(correo)) {
        $mail.addClass("is-invalid");
        $mail.next(".error-message").text("El correo no es valido.").show();
        isValid = false;
      }
    }

    // Si todo está bien
    if (isValid) {
      alert("Se ha enviado un enlace de recuperación al correo ingresado.");
      this.reset();
    }
  });
});

