function carregarItens() {
    return lsProdutos = [
        { "cod": "01", "valor": 10, "descricao": "pão, salsicha Perdigão, presunto, mussarela, milho, tomate, batata palha e maionese.", "grupo": "Salsicha na Chapa", categoria: "HOTDOG", "qt": 0 },
        { "cod": "02", "valor": 10, "descricao": "pão, salsicha perdigão, presunto, mussarela, milho, tomate, bacon e maionese.", "grupo": "Salsicha na Chapa", categoria: "HOTDOG", "qt": 0 },
        { "cod": "04", "valor": 12, "descricao": "pão, filé de frango, bacon, mussarela, maionese, milho, tomate, alface e cebola roxa.", "grupo": "Frango na Chapa", categoria: "HOTDOG", "qt": 0 },
        { "cod": "09", "valor": 17, "descricao": "Bomba de frango, pão, 2 filé de frango, 2 queijos mussarela, salsicha Perdigão, calabresa, bacon, maionese, milho, tomate.", "grupo": "Frango na Chapa", categoria: "HOTDOG", "qt": 0 },
        { "cod": "12", "valor": 13, "descricao": "pão, filé minon, bacon, mussarela, maionese, milho, tomate, alface e cebola roxa.", "grupo": "Filé Mignon na Chapa", categoria: "HOTDOG", "qt": 0 },
        { "cod": "15", "valor": 17, "descricao": "Bomba de filé mignon, pão, 2 filé de carne, 2 queijos mussarela, salsicha Perdigão, calabresa, bacon, maionese, milho, tomate.", "grupo": "Filé Mignon na Chapa", categoria: "HOTDOG", "qt": 0 },
        { "cod": "XFF", "valor": 17, "descricao": "X Filé Frango - Pão, filé de frando, queijo, presunto, ovo, bacon, salada, cebola roxa e maionese.", "grupo": "Sanduiches Especiais", categoria: "FILÉ", "qt": 0 },
        { "cod": "XFC", "valor": 17, "descricao": "X Filé Carne - Pão, filé de mignon, queijo, presunto, ovo, bacon, salada, cebola roxa e maionese.", "grupo": "Sanduiches Especiais", categoria: "ARTESANAL", "qt": 0 },
        { "cod": "41", "valor": 7, "descricao": "Over kids: Pão, hamburguer, queijo e maionese.", "grupo": "Over Burguer", categoria: "Gourmet 100g", "qt": 0 },
        { "cod": "44", "valor": 9, "descricao": "Over Salada: Pão, hamburguer, queijo, salada e maionese.", "grupo": "Over Burguer", categoria: "Tradicionais 100g", "qt": 0 },
        { "cod": "46", "valor": 13, "descricao": "Over Bacon: Pão, hamburguer, queijo, bacon, salada e maionese.", "grupo": "Over Burguer", categoria: "", "qt": 0 },
        { "cod": "50", "valor": 17, "descricao": "Over Burguer: Pão, hamburguer, queijo, presunto, ovo, bacon, salada e maionese.", "grupo": "Over Burguer", categoria: "", "qt": 0 },
        { "cod": "KRT", "valor": 18, "descricao": "OVER KART - PÃO TRADICIONAL GERGELIM, HAMBURGUER 150g, TOMATE, CEBOLA CARAMELIZADA, CHEDDAR, BACON, MAIONESE ESPECIAL.", "grupo": "ARTESANAIS", categoria: "HAMBURGUERES", "qt": 0 },
        { "cod": "RUN", "valor": 17, "descricao": "OVER RUN - PÃO TRADICIONAL GERGELIM, HAMBURGUER 150g, TOMATE, CEBOLA ROXA, CHEDDAR, BACON, MAIONESE ESPECIAL.", "grupo": "ARTESANAIS", categoria: "", "qt": 0 },
        { "cod": "BKE", "valor": 16, "descricao": "OVER BIKE - PÃO TRADICIONAL GERGELIM, HAMBURGUER 150g, TOMATE, MUSSARELA, BACON, MAIONESE ESPECIAL.", "grupo": "ARTESANAIS", categoria: "", "qt": 0 },
        { "cod": "24", "valor": 10, "descricao": "Pão, Salsicha Perdigão, queijo, molho, milho, MAIONESE ESPECIAL e batata palha.", "grupo": "Salsicha ao Molho", categoria: "Artesanal", "qt": 0 },
        { "cod": "26", "valor": 12, "descricao": "Pão, 2 Salsicha Perdigão, queijo, molho, milho, MAIONESE ESPECIAL e batata palha.", "grupo": "Salsicha ao Molho", categoria: "", "qt": 0 },
        { "cod": "26.1", "valor": 13, "descricao": "Especial c/bacon - Pão, Salsicha Perdigão, queijo, molho, milho, MAIONESE ESPECIAL e batata palha.", "grupo": "Salsicha ao Molho", categoria: "", "qt": 0 },
        { "cod": "26.2", "valor": 12, "descricao": "Espcial c/pasta de alho - Pão, Salsicha Perdigão, queijo, molho, milho e batata palha.", "grupo": "Salsicha ao Molho", categoria: "", "qt": 0 },
        { "cod": "27", "valor": 11, "descricao": "Pão, Strogonoff de frango, queijo, milho e batata palha.", "grupo": "Strogonoff de Frango", categoria: "Artesanal", "qt": 0 },
        { "cod": "28", "valor": 12, "descricao": "Pão, Strogonoff de frango, queijo, catupiry, milho e batata palha.", "grupo": "Strogonoff de Frango", categoria: "", "qt": 0 },
        { "cod": "29", "valor": 30, "descricao": "Pão, Strogonoff de frango, queijo, salsicha Perdigão, milho e batata palha.", "grupo": "Strogonoff de Frango", categoria: "", "qt": 0 },
        { "cod": "30", "valor": 14, "descricao": "Pão, Strogonoff de frango, queijo, salsicha Perdigão, catupiry, milho e batata palha.", "grupo": "Strogonoff de Frango", categoria: "", "qt": 0 },
        { "cod": "30.1", "valor": 14, "descricao": "Especial c/ bacon - Pão, Strogonoff de frango, queijo, milho e batata palha.", "grupo": "Strogonoff de Frango", categoria: "", "qt": 0 },
        { "cod": "30.2", "valor": 12.5, "descricao": "Especial c/ pasta de alho - Pão, Strogonoff de frango, queijo, milho e batata palha.", "grupo": "Strogonoff de Frango", categoria: "", "qt": 0 },
        { "cod": "TXN", "valor": 14, "descricao": "TEXANO - Pão, linguicinha defumada, mussarela, molho de tomate caseiro, maionese, bacon e batata palha.", "grupo": "Linguicinha Defumada", categoria: "Perdigão", "qt": 0 },
        { "cod": "CWB", "valor": 15, "descricao": "COWBOY - Pão, linguicinha defumada, mussarela, strogonoff de frango, bacon e batata palha.", "grupo": "Linguicinha Defumada", categoria: "", "qt": 0 },
        { "cod": "", "valor": 10, "descricao": "COMBO(Batata Frita + Refri)", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 2, "descricao": "Batata Palha", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 3, "descricao": "Calabresa", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 1, "descricao": "Catupiry", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 2, "descricao": "Salsicha", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 3, "descricao": "Bacon", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 4, "descricao": "Filé", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 2, "descricao": "Ovo", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 4, "descricao": "Hamburguer", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 1, "descricao": "Embalagem p/ Viagem", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 1.5, "descricao": "Pasta Artesanal VERDE", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 1.5, "descricao": "Pasta Artesanal ALHO", "grupo": "ADICIONAIS", categoria: "", "qt": 0 },
        { "cod": "", "valor": 4.5, "descricao": "Refrigerante em lata", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 6, "descricao": "Refrigerante 600ml", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 8, "descricao": "Refrigerante 1,5 litros", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 10, "descricao": "Refrigerante 2 litros", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 6, "descricao": "Limoneto / H2O", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 5, "descricao": "Chá - limão / pêssego", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 5, "descricao": "Suco em lata", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 2.5, "descricao": "Suco de caixinha 200 ml", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 8, "descricao": "Cerveja long neck", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 10, "descricao": "Red Bull", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 2.5, "descricao": "Água mineral", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 3, "descricao": "Transformar 1 suco em creme", "grupo": "Bebidas", categoria: "", "qt": 0 },
        { "cod": "", "valor": 4.9, "descricao": "Abacaxi", "grupo": "Sucos (Tradicionais)", categoria: "POLPAS", "qt": 0 },
        { "cod": "", "valor": 4.9, "descricao": "Acerola", "grupo": "Sucos (Tradicionais)", categoria: "POLPAS", "qt": 0 },
        { "cod": "", "valor": 4.9, "descricao": "Caju", "grupo": "Sucos (Tradicionais)", categoria: "POLPAS", "qt": 0 },
        { "cod": "", "valor": 4.9, "descricao": "Goiaba", "grupo": "Sucos (Tradicionais)", categoria: "POLPAS", "qt": 0 },
        { "cod": "", "valor": 4.9, "descricao": "Manga", "grupo": "Sucos (Tradicionais)", categoria: "POLPAS", "qt": 0 },
        { "cod": "", "valor": 6.9, "descricao": "Morango", "grupo": "Sucos (Especiais)", categoria: "POLPAS", "qt": 0 },
        { "cod": "", "valor": 6.9, "descricao": "Maracujá", "grupo": "Sucos (Especiais)", categoria: "POLPAS", "qt": 0 },
        { "cod": "", "valor": 6.9, "descricao": "Cupuaçu", "grupo": "Sucos (Especiais)", categoria: "POLPAS", "qt": 0 },
        { "cod": "", "valor": 6.9, "descricao": "Abacaxi com Hortelá", "grupo": "Sucos (Especiais)", categoria: "POLPAS", "qt": 0 },
        { "cod": "", "valor": 6.9, "descricao": "Cajá", "grupo": "Sucos (Especiais)", categoria: "POLPAS", "qt": 0 }]
}
