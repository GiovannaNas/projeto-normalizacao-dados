import { normalizeData, readFiles, saveData } from "./src/utils/data.js";

// Função que é executada quando o arquivo é executado
export const main = async () => {
  // Lendo arquivo
  const vehiclesSoldData = await readFiles("broken_database_1");
  const vehiclesBrandData = await readFiles("broken_database_2");

  console.log("==============================================");
  console.log("Iniciando processamento de arquivos JSON...");
  console.log("==============================================");

  const vehiclesDataNormalized = await normalizeData(vehiclesSoldData);
  const vehiclesBrandNormalized = await normalizeData(vehiclesBrandData);

  try {
    await saveData(vehiclesDataNormalized, "vehicles_sold");
    await saveData(vehiclesBrandNormalized, "vehicles_brand");

    console.log("==============================================");
    console.log("Processamento de arquivos JSON finalizado!");
    console.log(
      "Verifique os arquivos vehicles_sold.json e vehicles_brand.json na pasta ./src/data"
    );
    console.log("==============================================");
  } catch (error) {
    console.error("Erro ao salvar arquivos JSON:", error.message);
  }
};

main();
