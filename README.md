# Projeto Teste Web Analytics - Documentação
O foco principal é a normalização de arquivos JSON, seguida por uma análise e manipulação dos dados. Todo o desenvolvimento foi realizado em JavaScript, utilizando exclusivamente as bibliotecas nativas do Node.js, sem depender de bibliotecas de terceiros.

## Estrutura do Projeto
O projeto foi organizado de forma a facilitar a manutenção e compreensão do código. As subpastas desempenham papéis específicos:

common: Armazena variáveis globais utilizadas em diversos pontos do código.
csv: Contém o CSV gerado para análises posteriores.
data: Inclui os arquivos JSON originais, os arquivos normalizados e uma cópia do CSV em formato JSON.
SQL: Contém os scripts SQL para criação e inserção de dados nas tabelas, bem como a unificação dos JSON em uma tabela.
Utils: Contém funções genéricas reutilizáveis em diferentes partes do código.
O arquivo principal, index.js, é responsável por executar a lógica necessária para a normalização dos arquivos.

## Lógica do Projeto
Função main (Arquivo main.js)
A função main atua como ponto de entrada, coordenando todas as operações necessárias para a normalização dos dados. Ela lida com dois cenários principais:

Normalização com sucesso:
Realiza a leitura dos arquivos JSON.
Inicia logs de aplicação.
Chama a função que normaliza os dados e os salva.
Utiliza um bloco try/catch para tratamento de erros.
Registra logs de sucesso ou falha ao salvar os arquivos.
Função normalizeData (Arquivo utils/data.js)
A função normalizeData é a peça central do projeto, responsável pela lógica de normalização dos dados. Recebe um parâmetro data, representando o arquivo lido pela função readFile. A lógica inclui:

Bloco try/catch para tratamento de erros.
Conversão do JSON em um array de objetos (dataToNormalize).
Manipulação dos dados para corrigir letras incorretas nas propriedades indicadas em KeysToNormalize.
Conversão das propriedades listadas em KeysToNumber para números.
Retorno dos dados normalizados.
Função saveData (Arquivo utils/data.js)
A função saveData recebe dados (data) e um nome de arquivo (fileName). Tenta escrever esses dados em um arquivo JSON no sistema de arquivos, lidando com possíveis erros durante o processo.
