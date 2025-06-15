class ProdutosPage {

    visitarUrl(){
        cy.visit('home')
        cy.get('[data-testid="pesquisar"]').should("exist")
    }

    buscarProduto(){
        cy.get('[data-testid="pesquisar"]').type("Produto Existente")
        cy.get('[data-testid="botaoPesquisar"]').click()
       cy.get('[href="/detalhesProduto/NOU7o3ANxghQ07us"] > .card-link').click()
    }
    selecionarProduto(){
        //cy.get(':nth-child(9) > .card-body > :nth-child(1) > .imagem').click()
        cy.get('[href="/detalhesProduto/5lwHfIma6pPbC4wb"] > .card-link').click()
    }
    


    adicionarProduto(){
        cy.get(':nth-child(7) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
        cy.get('[data-testid="adicionar carrinho"]').click()
    }


}
export default new ProdutosPage()