class Carrinho {
  constructor() {
    this.itens = [];
  }

  adicionarItem(item) {
    const existente = this.itens.find(i => i.nome === item.nome);
    if (existente) {
      existente.quantidade += item.quantidade;
    } else {
      this.itens.push(item);
    }
  }

  removerItem(nome) {
    this.itens = this.itens.filter(item => item.nome !== nome);
  }

  listarItens() {
    return this.itens.map(item => ({
      nome: item.nome,
      preco: item.preco,
      quantidade: item.quantidade,
      subtotal: item.subtotal()
    }));
  }

  calcularTotal() {
    return this.itens.reduce((acc, item) => acc + item.subtotal(), 0);
  }
}

module.exports = Carrinho;
