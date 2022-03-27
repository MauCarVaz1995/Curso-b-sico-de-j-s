var estudiantes = ["Mauricio", "Alberto", "Yolanda", "Daniela"]

function saludarEstudiantes(estudiante){
   console.log(`Hola, ${estudiante}`);
}

for ( var i = 0; i < estudiantes.length; i++ ){
    saludarEstudiantes(estudiantes[i])
}
/*Podría ser así 
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}*/