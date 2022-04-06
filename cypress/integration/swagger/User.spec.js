/// <reference types="cypress" />

describe('Given the Users api store', () => {
  context('When ', () => {
    it('Then it should return a detail store', () => {
      cy.request({
        method: 'POST',
        url: '/v2/user/createWithArray',
        qs: [
          {
            "id": 0,
            "username": "string",
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": 0
          }
        ]
      })
        .should((response) => {
          expect(response.status).to.eq(200)
        });
    });
  });

  context('When I send get store', () => {
    it('Then it should return success post store', () => {
      cy.request({
        method: 'POST',
        url: '/v2/user/user1'
      })
    });
  });

  context('When I send get store', () => {
    it('Then it should return success post store', () => {
      cy.request({
        method: 'PUT',
        url: '/v2/user/user1',
        qs: {
          "id": 0,
          "username": "string",
          "firstName": "string",
          "lastName": "string",
          "email": "string",
          "password": "string",
          "phone": "string",
          "userStatus": 0
        }
      })
    });
  });

  context('When I send get store', () => {
    it('Then it should return success post store', () => {
      cy.request({
        method: 'GET',
        url: '/v2/user/login?username=wulan&password=123',
      })
    });
  });

  context('When I send get store', () => {
    it('Then it should return success post store', () => {
      cy.request({
        method: 'GET',
        url: '/v2/user/logout',
      })
      .should((response) => {
        expect(response.status).to.eq(200)
      });
    });
  });

  context('When I send get store', () => {
    it('Then it should return success post store', () => {
      cy.request({
        method: 'POST',
        url: '/v2/user',
        qs: {
          "id": 0,
          "username": "string",
          "firstName": "string",
          "lastName": "string",
          "email": "string",
          "password": "string",
          "phone": "string",
          "userStatus": 0
        }
      })
      .should((response) => {
        expect(response.status).to.eq(200)
      });
    });
  });
});
