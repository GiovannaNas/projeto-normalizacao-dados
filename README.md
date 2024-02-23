# Projeto Web Analytics 
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

#  Estrutura de Arquivos
A estrutura de arquivos deste projeto foi cuidadosamente planejada para garantir organização, modularidade e facilidade de manutenção. Cada subpasta desempenha um papel específico, contribuindo para a clareza e eficiência do desenvolvimento.

## 1. Pasta 'common'
A pasta common armazena variáveis globais que podem ser utilizadas em diferentes partes do código. Essas variáveis são centralizadas aqui para promover consistência e facilitar eventuais ajustes ou expansões no futuro. Ao agrupar esses elementos comuns em uma única pasta, a manutenção torna-se mais intuitiva.

 ## 2. Pasta csv
A pasta csv contém o CSV gerado durante o processo de análise de dados. Este arquivo pode ser consultado para insights adicionais ou ser utilizado em outras ferramentas externas. Manter este arquivo separado facilita o compartilhamento e a reutilização de dados tabulares.

## 3. Pasta data
A pasta data é central para armazenar os arquivos JSON originais, os arquivos normalizados e uma cópia do CSV em formato JSON. Organizar esses arquivos de maneira estruturada facilita a visualização e o controle sobre as diferentes versões dos dados ao longo do processo.

##  4. Pasta SQL
A pasta SQL contém os scripts SQL utilizados para criar e inserir dados nas tabelas, bem como para unificar os JSON em uma tabela no ambiente SQL Online. A organização desses scripts em uma pasta separada ajuda a manter a clareza e permite a fácil localização de comandos SQL específicos.

 ## 5. Pasta Utils
A pasta Utils é dedicada a funções genéricas que são reutilizáveis em várias partes do código. Essas funções têm a intenção de simplificar o desenvolvimento, evitando redundâncias e promovendo a coesão do código. Manter essas funções em uma pasta específica facilita a identificação e o acesso a recursos comuns.

## 6. Arquivo index.js
O arquivo index.js é o ponto de entrada do projeto. Ele executa a lógica necessária para a normalização dos arquivos e serve como o principal ponto de coordenação do fluxo de trabalho. Manter esse arquivo organizado e focado em suas responsabilidades principais é fundamental para a compreensão rápida do projeto.

Essa estrutura de arquivos foi projetada com o intuito de proporcionar uma experiência de desenvolvimento coesa, onde cada componente desempenha um papel claro. A clareza na organização do código não apenas facilita a manutenção contínua, mas também promove a colaboração eficaz entre membros da equipe.
