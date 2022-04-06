/// <reference types="cypress" />

describe('Given the Users api store', () => {
  context('When ', () => {
    it('Then it should return a detail store', () => {
      cy.request({
        method: 'POST',
        url: '/store/order',
        qs: {
          "id": 0,
          "petId": 0,
          "quantity": 0,
          "shipDate": "2022-04-05T12:31:46.226Z",
          "status": "placed",
          "complete": true
        }
      })
        .should((response) => {
          expect(response.status).to.eq(200)
        });
    });
  });

  context('When I send get store', () => {
    it('Then it should return success post store', () => {
      cy.request({
        method: 'GET',
        url: '/v2/store/order/4'
      })
    });
  });

  context('When I send get store', () => {
    it('Then it should return success post store', () => {
      cy.request({
        method: 'GET',
        url: '/v2/store/inventory'
      })
    });
  });
});
