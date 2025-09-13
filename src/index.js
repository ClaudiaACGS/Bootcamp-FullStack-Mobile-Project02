const readline = require("readline");
const Item = require("./models/Item");
const Carrinho = require("./services/Carrinho");

const carrinho = new Carrinho();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n🛒 Carrinho Shopee");
  console.log("1 - Adicionar item");
  console.log("2 - Remover item");
  console.log("3 - Listar itens");
  console.log("4 - Ver total");
  console.log("0 - Sair");
  rl.question("Escolha uma opção: ", opcao => {
    switch (opcao) {
      case "1":
        adicionarItem();
        break;
      case "2":
        removerItem();
        break;
      case "3":
        listarItens();
        break;
      case "4":
        verTotal();
        break;
      case "0":
        console.log("Saindo... até logo!");
        rl.close();
        break;
      default:
        console.log("❌ Opção inválida!");
        mostrarMenu();
    }
  });
}

function adicionarItem() {
  rl.question("Nome do produto: ", nome => {
    rl.question("Preço do produto: ", preco => {
      rl.question("Quantidade: ", quantidade => {
        carrinho.adicionarItem(new Item(nome, parseFloat(preco), parseInt(quantidade)));
        console.log(`✅ ${quantidade}x ${nome} adicionado(s)!`);
        mostrarMenu();
      });
    });
  });
}

function removerItem() {
  rl.question("Nome do produto a remover: ", nome => {
    carrinho.removerItem(nome);
    console.log(`🗑️ ${nome} removido do carrinho.`);
    mostrarMenu();
  });
}

function listarItens() {
  console.log("\n📦 Itens no carrinho:");
  console.table(carrinho.listarItens());
  mostrarMenu();
}

function verTotal() {
  console.log(`💰 Total do carrinho: R$ ${carrinho.calcularTotal()}`);
  mostrarMenu();
}

// Início do programa
mostrarMenu();

