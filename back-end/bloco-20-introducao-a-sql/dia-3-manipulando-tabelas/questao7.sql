-- Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".
DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);

DELETE FROM Movies
WHERE director = 'Andrew Staton';