import { faker } from '@faker-js/faker';
import userData from '../fixtures/userData.json';

describe('Teste cadastrar usuarios Serverest', () => {


})
beforeEach(() => {
  cy.visit('cadastrarusuarios')
  cy.get('.form-check-label').should("contain", "Cadastrar como administrador?")
});
it('Validação de cadastro com erro de email repetido- dados fixos', () => {
  cy.get('[data-testid="nome"]').type("Diego")
  cy.get('[data-testid="email"]').type("droxo63@gmail.com")
  cy.get('[data-testid="password"]').type("123456")
  cy.get('[data-testid="cadastrar"]').click()
  cy.wait(4000)
  cy.get('.alert > :nth-child(2)').contains("Este email já está sendo usado")

})

it('Validação de cadastro de ususario com sucesso', () => {
  cy.get('[data-testid="nome"]').type(userData.name)
  cy.get('[data-testid="email"]').type(faker.internet.email())
  cy.get('[data-testid="password"]').type(userData.password)
  cy.get('[data-testid="cadastrar"]').click()
  cy.wait(5000)
  cy.get('[data-testid="pesquisar"]').should('exist')

})

it('Validação de cadastro de adm com sucesso - Usando fixture', () => {
  let name = faker.person.firstName()
  let email = faker.internet.email(name)
  let password = faker.internet.password()
  cy.fixture("userData").then(dados => {
    cy.get('[data-testid="nome"]').type(name)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="checkbox"]').click()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert-link').should('contain', 'Cadastro realizado com sucesso')
    cy.wait(5000)
    cy.get('body').should('contain', 'Bem Vindo')
  })


})

it('Validação de cadastro de usuario com email invalido', () => {
  cy.get('[data-testid="nome"]').type(userData.name)
  cy.get('[data-testid="email"]').type(userData.wrongEmail)
  cy.get('[data-testid="password"]').type(userData.password)
  cy.get('[data-testid="cadastrar"]').click()
  cy.get('.alert').contains("Email deve ser um email válido")
})

it('Validação de cadastro de usuario com campo nome em branco', () => {
  cy.get('[data-testid="nome"]').clear()
  cy.get('[data-testid="email"]').type(faker.internet.email())
  cy.get('[data-testid="password"]').type(userData.password)
  cy.get('[data-testid="cadastrar"]').click()
  cy.get('.alert').should("exist")
})

it('Validação de cadastro de usuario com todos os campos em branco', () => {
  cy.get("[name='nome']").clear()
  cy.get('[data-testid="email"]').clear()
  cy.get('[data-testid="password"]').clear()
  cy.get('[data-testid="cadastrar"]').click()
  cy.get('.form > :nth-child(3)').contains("Nome é obrigatório")
  cy.get('.form > :nth-child(4)').contains("Email é obrigatório")
  cy.get('.form > :nth-child(5)').contains("Password é obrigatório")

})
it('Validação de cadastro de usuario com campo senha em branco', () => {
  cy.get('[data-testid="nome"]').type(userData.name)
  cy.get('[data-testid="email"]').type(faker.internet.email())
  cy.get('[data-testid="password"]').clear()
  cy.get('[data-testid="cadastrar"]').click()
  cy.get('.alert').contains("Password é obrigatório")
})

it('Devo clicar em Entrar para ir a pagina de login', () => {

  cy.get('[data-testid="entrar"]').click()
  cy.get('[data-testid="email"]').should("exist")
  cy.get('.font-robot').contains("Login")
})
