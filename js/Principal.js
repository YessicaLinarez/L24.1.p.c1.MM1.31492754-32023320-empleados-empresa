import Cl_Empleado from "./Cl_Empleado.js";
import Cl_Empresa from "./Cl_Empresa.js";

let Empleado1 = new Cl_Empleado("Mary","F");
let Empleado2 = new Cl_Empleado("Jose","M");
let Empleado3 = new Cl_Empleado("Carlos","M");
let Empleado4 = new Cl_Empleado("Pedro","M");

let Empresa = new Cl_Empresa();

Empresa.procesarEmpleado(Empleado1);
Empresa.procesarEmpleado(Empleado2);
Empresa.procesarEmpleado(Empleado3);
Empresa.procesarEmpleado(Empleado4);

let salida = document.getElementById("salida");
salida.innerHTML+= "<br> Cantidad de hombres que trabajan en la empresa: " +Empresa.devolverContEmpleadosM();
salida.innerHTML+= "<br> Porcentaje de mujeres que trabajan en la empresa: " +Empresa.porcentajeMujeres() + "%";
