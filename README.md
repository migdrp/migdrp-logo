# Migdrp Logo

El logotipo oficial de Migdrp encapsulado en un webcomponent reutilizable


## Parámetros:

1. text-size='20px'

2. dark-color='#323232'

3. has-text='true'

4. custom-uri='png/img/svg source'


## Entorno de desarrollo

El entrono de desarrollo consta de 2 partes.

1. El servidor de desarrollo de webpack: La configuración webpack.dev.build se encarga de compilar el webcomponent y desplegarlo en el servidor de desarrollo de webpack.

> npm run dev

2. La compilación de npm de webpack: La configuración de webpack.npm.build se utiliza para generar un modulo npm el cual puede ser desplegado en un repositorio npm para el uso remoto del web component.

> npm run build