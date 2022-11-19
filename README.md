#ANALIZADOR SINTACTICO GIC TEORIA DE COMPILADORES

La dirección de un correo electrónico se escribe así: usuario@dominio y en forma general
usuario@subdominion.subdominion-1. …subdominio2.subdominio1. dominio-de-mas-alto-nivel.
Ejemplo: dmercado@cuc.edu.co.
Usted debe realizar una GIC que permita reconocer la escritura de una dirección de correo
electrónico Teniendo en cuenta las siguientes especificaciones.
El usuario tiene las siguientes características:
a) Está compuesto por letras minúsculas, dígitos, guion bajo (_) y punto (.).
b) Empieza en letra o digito
c) Los puntos no pueden ir seguidos
d) Los guiones bajos pueden ir seguidos solo al final así:
maria_t_mx_r_ _ (correcto)
1_ _maria_ t_ _perez (incorrecto)
Los subdominios pueden ser varios de más bajo nivel a más alto nivel.
a) Los subdominios van separados por punto
b) Cada subdominio está formado solo por letras minúsculas y /o dígitos
c) El último subdominio el de más alto nivel tiene longitud máxima de 2 caracteres; los
demás subdominios tienen longitud mínima de 2.
La dirección de correo debe contener al menos el usuario, un subdominio de bajo nivel y uno de
alto nivel, 