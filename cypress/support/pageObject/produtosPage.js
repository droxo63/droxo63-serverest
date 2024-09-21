class ProdutosPage {

    visitarUrl(){
        cy.visit('home')
        cy.get('[data-testid="pesquisar"]').should("exist")
    }

    buscarProduto(){
        cy.get('[data-testid="pesquisar"]').type("Iphone 21")
        cy.get('[data-testid="botaoPesquisar"]').click()
        cy.get('.card-link').click()
    }
    selecionarProduto(){
        //cy.get(':nth-child(9) > .card-body > :nth-child(1) > .imagem').click()
        cy.get('[href="/detalhesProduto/4Gtyf2UVyZptcycc"] > .card-link').click()
    }
    


    adicionarProduto(){
        cy.get(':nth-child(7) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
        cy.get('[data-testid="adicionar carrinho"]').click()
    }


}
export default new ProdutosPage()