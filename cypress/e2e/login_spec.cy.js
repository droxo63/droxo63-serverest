
describe('Teste ServeRest', () => {
  beforeEach(() => {
    cy.visit('login')
    cy.get('.font-robot').contains("Login")
  });
  it('Validação de login com usuario cadastrado adm', () => {


    cy.get('[data-testid="email"]').type("dteste123@gmail.com")
    cy.get('[data-testid="senha"]').type("123456")
    cy.get('[data-testid="entrar"]').click()
    cy.get('.lead').should("exist")
  })

  it.only('Validação de login com sucesso de usuario normal ', () => {


    cy.get('[data-testid="email"]').type("droxo63@gmail.com")
    cy.get('[data-testid="senha"]').type("123456")
    cy.get('[data-testid="entrar"]').click()
    cy.get('h1').contains("Serverest Store")
  })

  it('Validação de login com usuario invalido ', () => {


    cy.get('[data-testid="email"]').type("diego@teste.com")
    cy.get('[data-testid="senha"]').type("123456")
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').contains("Email e/ou senha inválidos")
  })

  it('Validação de login com email invalido ', () => {

    cy.get('[data-testid="email"]').type("diego@teste")
    cy.get('[data-testid="senha"]').type("123456")
    cy.get('[data-testid="entrar"]').click()
    cy.get('.form > :nth-child(3)').contains("Email deve ser um email válido")
  })

  it('Validação de login com senha em branco ', () => {


    cy.get('[data-testid="email"]').type("diego@teste1.com")
    cy.get('[data-testid="senha"]').type("123456").clear()
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').contains("Password não pode ficar em branco")
  })
  it('Validação de login com email em branco ', () => {


    cy.get('[data-testid="email"]').type("diego@teste1.com").clear()
    cy.get('[data-testid="senha"]').type("123456")
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert > :nth-child(2)').contains("Email não pode ficar em branco")
  })
  it("Validação de login com formato inválido sem '@'", () => {


    cy.get('[data-testid="email"]').type("diegoteste.com")
    cy.get('[data-testid="senha"]').type("123456")
    cy.get('[data-testid="entrar"]').click()
    // Verifica a mensagem de alerta
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Inclua um "@" no endereço de e-mail. "diegoteste.com" está com um  faltando.')
    })

  })

  it('Devo clicar para fazer o registro e ser direcionado para pagina de cadastro', () => {

    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.form-check-label').should("be.visible")
    cy.get('[data-testid="cadastrar"]').contains("Cadastrar")
  })


})




