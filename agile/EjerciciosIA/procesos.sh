#!/bin/bash

# Mostrar el número total de procesos
total_procesos=$(ps aux | wc -l)
echo "Número total de procesos: $((total_procesos - 1))"  # Restar 1 para excluir la línea de encabezado

# Mostrar la memoria total ocupada (RSS)
memoria_total=$(ps aux --no-heading | awk '{sum += $6} END {print sum/1024 " MB"}')
echo "Memoria total ocupada: $memoria_total"

# Mostrar los nombres de los 5 procesos que más memoria utilizan
echo "Los 5 procesos que más memoria utilizan:"
ps aux --sort=-%mem | awk 'NR<=5 {print $11, $4 "%", $6/1024 " MB"}'
