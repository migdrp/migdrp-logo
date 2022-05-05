# Migdrp Logo

El logotipo oficial de Migdrp encapsulado en un webcomponent reutilizable


### Parámetros:

1.- text-size='20px'

2.- dark-color='#323232'

3.- has-text='true'

4.- custom-uri='png/img/svg source'


### Entorno de desarrollo

El entrono de desarrollo consta de 3 partes.

1.- El servidor de desarrollo de webpack: La configuración webpack.dev se encarga de compilar el webcomponent y desplegarlo en el servidor de desarrollo de webpack.
2.- La compilación de npm de webpack: La configuración de webpack.build se utiliza para generar un modulo npm el cual puede ser desplegado en un repositorio npm para el uso remoto del web component.
3.- Servidor de prueba node.js . La compilación del npm package puede ser probada de forma local con el servidor de node.js, mandando a llamar al componente web.