# CURSO NODE.JS MIDUDEV

## Instalación

- Es un entorno de ejecución para JAVASCRIPT
- Descargarlo mediante:
  - [NODE.JS](https://nodejs.org/en/download/prebuilt-installer)
- **DESVENTAJAS:**
    - Se instala solo 1 vez
- **RECOMENDACIONES**
  - **_NVM_**
  -  **_FNM_**
- Consultar la versión de _NODE.JS_
  - **_node -v_**
- Consultar las versiones que tengo instaladas:
  - **_nvm list_**
- Instalar una versión
  - **_nvm install (version)_**
- Utilizar una versión especifica de las que tengo instaladas:
  - **_nvm use (version)_**
- Poner una versión por defecto
  - **_nvm alias 20.12.2 default_**

### USO EN CONSOLA

- Tecleamos en consola:
  - **_node_**
- Ejemplo:
    - ```        
        const a = 'hola'
        console.log(a)
        ```
- Ejecutar un archivo con **_NODEJS_**
- Ejemplo:
  - Creamos una carpeta: **_JS_**, dentro de ella, creamos un archivo: **_00.index.js_** y creamos un contenido **_JS_**
- Para ejecutar el contenido:
  - **_node 00.index.js_**
- Nota:
  - Debes moverte al directorio de la carpeta, ejemplo:
    - **_cd JS_**
- **_NPM_**
  - _node pack managment:_
    - administrado de paquetes
    - Versión:
      - **_npm --version_**
- Otra opción:
  - **_pnpm_**
- Instalación en nuestro proyecto:
  - **_npm init_**
  - Nos va pedir lo siguiente:
    - Nombre del paquete: 
      - **curso-node**
    - Versión:
      - **damos ENTER**
    - Description:
      - **Pones una descripción**
    - Entry Point:
      - **00.index.js** <- ponemos el archivo principal
    - Test Command:
      - **_**
    - Git Repository:
      - **Ponemos la URL que te da GIT: https://github.com/MorsaDevOmarG/curso-nodejs-midudev**
    - Keywords:
      - **curso, node, nodejs, midudev**
    - Author:
      - **tu nombre**
    - License:
      - **Damos ENTER**
    - Is this ok?
      - **Damos ENTER**
    - Nos va crear un: 
      - **_PACKAGE.JSON_**
    - Sino queremos pasar por estas preguntas, en consola ponemos:
      - **npm init -y**
    - 