/// <reference types="cypress" />

describe('Given the Users api', () => {
  context('When I send GET /v2/pet/12', () => {
    it('Then it should return a detail pet', () => {
      cy.request({
        method: 'GET',
        url: '/v2/pet/12'
      })
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.category.name).to.eq("dogs")
        });
    });
  });

  context('When I send Post pet', () => {
    it('Then it should return success post pet', () => {
      cy.request({
        method: 'POST',
        url: '/v2/pet/11',
        qs: {
          petId: '11',
          name: 'rabbit',
          status: 'valid'
        }
      })
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.message).to.eq("11")
        });
    });
  });
});
