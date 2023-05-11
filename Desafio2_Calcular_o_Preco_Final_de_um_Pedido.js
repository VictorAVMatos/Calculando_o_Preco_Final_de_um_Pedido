const valorHamburguer = parseFloat(gets(8.00));
const quantidadeHamburguer = parseInt(gets(1));
const valorBebida = parseFloat(gets(4.00));
const quantidadeBebida = parseInt(gets(4));
const valorPago = parseFloat(gets(50.00));

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
const valorTotalEmHamburguer = valorHamburguer * quantidadeHamburguer;
const valorTotalEmBebida = valorBebida * quantidadeBebida;
const valorTotalDoPedido = valorTotalEmBebida + valorTotalEmHamburguer;
const trocoDoPagamento = valorPago - valorTotalDoPedido;
const mensagem = `O preço final do pedido é R$ ${valorTotalDoPedido.toFixed(2)}. Seu troco é R$ ${trocoDoPagamento.toFixed(2)}.`;

print(mensagem)