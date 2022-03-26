# Ejercicio 1

El objetivo principal del ejercicio es la implementación de HOC dentro de react para la reutilización de lógica entre componentes.

En este caso se esta diseñando una lista de items (productos y estudiantes), las listas cuentan cada una con su respectiva información. 

Las dos listas deben tener habilitado un input para hacer una busqueda sobre los elementos que hay; es aquí donde esta el principal reto de HOC, puesto que como se evidencia, si separamos la lógica para realizar la busqueda a una por cada modulo(products y students) vamos a tener: 

1. Lógica bastante repetitiva.

2. Dos componentes de más que realizan lo mismo, solamente que para dos modulos diferentes.

Por esto, se debe hacer la implementación del HOC, el cual permita su reutilización en estos dos modulos y los que puedan surgir más adelante.