-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT name, hours FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 3;