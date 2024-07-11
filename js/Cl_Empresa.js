export default class Cl_Empleado{
    constructor(){
     this.contEmpleadosM = 0;
     this.contEmpleadosF = 0;
    }

procesarEmpleado(e){

    if(e.sexo == "M"){
        this.contEmpleadosM++;
    }

    if(e.sexo == "F"){
        this.contEmpleadosF++;
    }

}

devolverContEmpleadosM(){
    return this.contEmpleadosM;
}

devolverContEmpleadosF(){
    return this.contEmpleadosF;
}
porcentajeMujeres(){
    return this.contEmpleadosF*100/(this.contEmpleadosF+this.contEmpleadosM);}
}