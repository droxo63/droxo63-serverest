/// <reference types = "cypress"/>
import produtosPage from "../support/pageObject/produtosPage"; 
describe('Teste ServeRest', () => {
    beforeEach(() => {
        
    cy.visit('login')
    cy.get('.font-robot').contains("Login")
    cy.get('[data-testid="email"]').type("droxo63@gmail.com")
    cy.get('[data-testid="senha"]').type("123456")
    cy.get('[data-testid="entrar"]').click()
    cy.get('h1').contains("Serverest Store")
    
    });

    it('Deve buscar um produto', () => {
        produtosPage.visitarUrl()  
        produtosPage.buscarProduto()
        cy.get('.especificacoes > h2.title').contains("Detalhes")
    });

    it('Deve selecionar um produto', () => {
        produtosPage.visitarUrl()   
        produtosPage.selecionarProduto()
        cy.get('.especificacoes > :nth-child(4)').should("exist")
       // cy.get('[data-testid="product-detail-name"]').contains("nulla")

    });

    it.skip('Deve visitar pagina do produto', () => {
        
       cy.visit('produtos')
       

    });

    it('Deve adicionar um produto ao carrinho', () => {
        produtosPage.visitarUrl()
        produtosPage.adicionarProduto()
        cy.get('h1').should("exist")
    })
})