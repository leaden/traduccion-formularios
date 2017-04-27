function translate(){
     
    var title = document.getElementById("form-signin-heading");
    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");
// se usa document.getElementById para especificar cual nodo sera modificado

	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];
	//devuelven un array con todos los elementos especificados del sitio y de la clase


title.innerHTML = "Por favor inicia sesion";
email.placeholder ="Correo Electronico";
password.placeholder = "Contraseña";
remember.innerHTML = "Recordar datos";
button.innerHTML = "Iniciar Sesion";


}

translate();

function mostrarInfo(){
	var email=document.getElementById("inputEmail").value;
	var password=document.getElementById("inputPassword").value;

	var emMostrar=document.getElementById("correo");
    emMostrar.innerHTML= "<h3>Datos de formulario</h3>" + "El correo ingresado es: </br>"+ mail;
	
	var passMostrar=document.getElementById("contraseña");
    passMostrar.innerHTML="La contraseña ingresada es: </br>" + password;
}


//No logro imprir nada en la pagina 