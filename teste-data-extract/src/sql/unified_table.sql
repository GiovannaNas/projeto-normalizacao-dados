/* Unifica as tabelas vehicles_sold e vehicles_brand em uma tabela única */

/* que contém todas as colunas de ambas as tabelas combinadas. A cláusula JOIN é usada
 para combinar as linhas onde o id_marca é igual nas duas tabelas. */

/* Tendo em vista que todos os veículos vendidos são de uma marca, a cláusula JOIN é usada
 para combinar as linhas onde o id_marca é igual nas duas tabelas. */

DROP TABLE IF EXISTS veiculos_unificados;

CREATE TABLE veiculos_unificados AS
SELECT
    vs.data_venda,
    vs.id_marca,
    vb.marca,
    vs.vendas,
    vs.valor_do_veiculo,
    vs.nome
FROM
    vehicles_sold vs
JOIN
    vehicles_brand vb ON vs.id_marca = vb.id_marca;
