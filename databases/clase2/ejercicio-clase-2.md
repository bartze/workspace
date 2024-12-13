# Informe del Ejercicio SQL

## 1. Creación de las Tablas

```sql
CREATE TABLE clientes (
    dni character varying(10) NOT NULL,
    nombre character varying(50) NOT NULL,
    apellidos character varying(100) NOT NULL,
    direccion character varying(200),
    PRIMARY KEY (dni)
);
CREATE TABLE compras (
    id serial PRIMARY KEY,
    cliente_dni character varying(10),
    producto_codigo_id integer,
    fecha_compra date DEFAULT CURRENT_DATE,
    FOREIGN KEY (cliente_dni) REFERENCES clientes(dni),
    FOREIGN KEY (producto_codigo_id) REFERENCES productos(codigo_id)
);
CREATE TABLE productos (
    codigo_id serial PRIMARY KEY,
    descripcion text,
    nombre character varying(100) NOT NULL,
    precio_unitario numeric(10,2) NOT NULL,
    proveedor_nif character varying(15),
    FOREIGN KEY (proveedor_nif) REFERENCES proveedores(nif)
);
CREATE TABLE proveedores (
    nif character varying(15) NOT NULL,
    nombre character varying(100) NOT NULL,
    direccion character varying(200),
    PRIMARY KEY (nif)
);
```

## 2. Inserción de Datos

```sql
INSERT INTO clientes (dni, nombre, apellidos, direccion) VALUES ('123456789A', 'Mario', 'Gonzalez', 'Calle Falsa 123');
INSERT INTO clientes (dni, nombre, apellidos, direccion) VALUES ('987654321B', 'Ana', 'Martinez', 'Avenida Siempre Viva 456');

INSERT INTO compras (id, cliente_dni, producto_codigo_id, fecha_compra) VALUES (1, '123456789A', 1, '2023-12-01');
INSERT INTO compras (id, cliente_dni, producto_codigo_id, fecha_compra) VALUES (2, '987654321B', 2, '2023-12-02');

INSERT INTO productos (codigo_id, descripcion, nombre, precio_unitario, proveedor_nif) VALUES (1, 'Balón de fútbol', 'Balón', 20.50, 'A12345678');
INSERT INTO productos (codigo_id, descripcion, nombre, precio_unitario, proveedor_nif) VALUES (2, 'Raqueta de tenis', 'Raqueta', 35.75, 'B87654321');

INSERT INTO proveedores (nif, nombre, direccion) VALUES ('A12345678', 'Proveedor Deportes S.L.', 'Calle Deportiva 1');
INSERT INTO proveedores (nif, nombre, direccion) VALUES ('B87654321', 'Suministros Deportivos S.A.', 'Avenida Atleta 2');
```

## 3. Consultas SQL

```sql
SELECT * FROM proveedores;
SELECT * FROM clientes WHERE nombre = 'Mario';
SELECT * FROM productos ORDER BY precio_unitario;
SELECT * FROM productos WHERE precio_unitario > 25;
SELECT proveedor_nif, COUNT(*) AS total_productos FROM productos GROUP BY proveedor_nif;
SELECT * FROM clientes ORDER BY apellidos;
SELECT * FROM productos WHERE precio_unitario > 20 AND precio_unitario < 40;
SELECT * FROM clientes WHERE direccion = 'Calle Falsa 123' OR direccion = 'Avenida Siempre Viva 456';
SELECT * FROM productos WHERE precio_unitario BETWEEN 15 AND 35;
SELECT * FROM clientes WHERE nombre LIKE 'M%';
SELECT * FROM compras WHERE cliente_dni IN ('123456789A', '987654321B');
SELECT AVG(precio_unitario) AS precio_promedio FROM productos;
SELECT COUNT(*) AS total_clientes FROM clientes;
SELECT SUM(precio_unitario) AS precio_total FROM productos;
SELECT MAX(precio_unitario) AS precio_maximo FROM productos;
SELECT MIN(precio_unitario) AS precio_minimo FROM productos;
```
