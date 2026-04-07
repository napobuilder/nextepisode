# Proyecto de Organización de Activos para E-commerce "Next Episode"

## 1. Objetivo

El propósito de este proyecto es organizar las imágenes de los productos (camisas) de la marca "Next Episode" en una estructura de carpetas y archivos limpia, escalable y estandarizada. Esta organización está diseñada para facilitar la gestión de productos en una plataforma de e-commerce (como Medusa, Shopify, o un desarrollo a medida con React).

## 2. Estructura de Carpetas

La estructura jerárquica sigue un patrón de `Colección -> Producto`.

- **Carpeta Raíz:** `Next_Episode_Ecommerce/`
    - **Nivel 1: Colección:** Cada subcarpeta representa una colección o tema (ej. `Dragon Ball`, `Jujutsu`, `Iron Maiden`).
        - **Nivel 2: Producto:** Dentro de cada colección, hay una carpeta por cada producto específico. El nombre de esta carpeta actúa como el identificador principal del producto (ej. `Goku-Kid-White`, `Luffy-Black`).
        - **Carpeta de Clasificación:** Se incluye una carpeta `_Para_Clasificar` dentro de cada colección para almacenar temporalmente imágenes que aún no han sido identificadas o asignadas a un producto.

## 3. Convención para Nombres de Archivos

Para asegurar la consistencia y facilitar el acceso mediante programación, todos los archivos de imagen dentro de una carpeta de producto deben seguir una convención de nomenclatura estricta.

**Formato:** `[NombreDelProducto]-[Vista]-[Numero].[extension]`

- **`[NombreDelProducto]`:** Es el mismo nombre de la carpeta que lo contiene.
- **`[Vista]`:** Describe el ángulo o tipo de imagen. Los valores estándar que hemos usado son:
    - `Frente`
    - `Espalda`
    - `Diseño`
    - `DiseñoFrente`
    - `DiseñoEspalda`
- **`[Numero]`:** Un número de dos dígitos (ej. `01`, `02`) para diferenciar varias imágenes de la misma vista.
- **`[extension]`:** La extensión del archivo (ej. `.jpg`, `.png`).

**Ejemplo Práctico:**
Para el producto en la carpeta `Goku-Kid-White/`, los archivos se nombran así:
- `Goku-Kid-White-Frente-01.jpg`
- `Goku-Kid-White-Espalda-01.jpg`
- `Goku-Kid-White-DiseñoFrente-01.jpg`

## 4. Tareas Pendientes

La estructura principal y el renombrado de archivos genéricos se ha completado. La única tarea manual pendiente es:

1.  **Clasificar las imágenes restantes:** Revisa los archivos con nombres `IMG-...` que se encuentran en las carpetas `_Para_Clasificar`.
2.  **Mover y Renombrar:** Mueve cada imagen a su carpeta de producto correspondiente y renómbrala siguiendo la convención descrita en este documento.
