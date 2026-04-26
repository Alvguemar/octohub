# RepoHub

Web estatica inspirada en una pagina de repositorio de GitHub. Esta preparada para publicarse en GitHub Pages sin build ni servidor.

## Abrir

Abre `index.html` directamente en el navegador.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube el contenido de esta carpeta al repositorio.
3. En GitHub, entra en `Settings > Pages`.
4. En `Build and deployment`, elige `GitHub Actions`.
5. Haz push a la rama `main`.

El workflow `.github/workflows/pages.yml` publicara la web automaticamente.

## Dominio propio

Cuando tengas listo el dominio, configuralo desde `Settings > Pages > Custom domain`.

## Archivos

- `index.html`: estructura de la interfaz.
- `styles.css`: estilos responsive.
- `script.js`: datos locales e interacciones.
- `.github/workflows/pages.yml`: despliegue automatico en GitHub Pages.
