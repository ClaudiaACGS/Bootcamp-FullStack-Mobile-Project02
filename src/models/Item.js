class Item {
  constructor(nome, preco, quantidade = 1) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  subtotal() {
    return this.preco * this.quantidade;
  }
}

module.exports = Item;

