# Data Extract

O projeto tem como base a normalização de arquivos JSON e após isto uma normalização a partir dos dados obtidos em código, vale ressaltar que para o desenvolvimento do código foi utilizado somente JS e as bibliotecas nativas do node.js, logo não foi utilizado no projeto nenhuma biblioteca terceira.

## Problema

Ao realizar o download do arquivo para JSON, alguns dados foram corrompidos e teve seus caracteres modificados.

- Nomes de veículos
  - Todos os "a" por "æ";
  - Todos os "o" por "ø";

- Número de vendas do veículo
  - Deveria ser do tipo number e virou string. Ex: "vendas": 11 para "vendas": "11";

Após as tratativas o código deve salvar os arquivos normalizados em uma pasta.
  
## Entregáveis

[X] Código JS utilizado para corrigir os dados
[X] Arquivos corrigidos broken_database_1.json e broken_database_2.json
[X] Código SQL
[X] Tabela unificada database.csv
[X] Relatório de vendas.PDF
[X] Explicação dos códigos.PDF

