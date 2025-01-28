# Composición vs. Herencia en React

React recomienda usar **composición** en lugar de **herencia** para reutilizar código entre componentes.
https://es.legacy.reactjs.org/docs/composition-vs-inheritance.html
La página explica dos conceptos principales:

## Contención

-   Algunos componentes no conocen sus hijos de antemano (ej. `Sidebar`, `Dialog`).
-   Se usa la prop especial `children` para pasar elementos hijos directamente.
-   También se pueden crear múltiples "agujeros" en un componente usando props personalizadas.

## Especialización

-   Se pueden crear componentes más específicos a partir de otros más genéricos.
-   Esto se logra mediante composición, configurando el componente genérico con props.

## Conclusión

La página concluye que en Facebook, donde usan React extensivamente, no han encontrado casos que justifiquen la creación de jerarquías de herencia de componentes. Las props y la composición ofrecen la flexibilidad necesaria para personalizar componentes de forma segura y explícita. Para reutilizar funcionalidad no relacionada con la interfaz, se sugiere extraerla en módulos JavaScript independientes.
