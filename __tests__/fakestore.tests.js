const request = require ("supertest");
const fetchMock = require("jest-fetch-mock");

fetchMock.enableMocks();

describe ("Testing Fake Store API", () =>{

it("Testing Itens Integrity of API", async () =>{
    const response = await request("https://fakestoreapi.com/products/").get("/");

    expect(response.status).toBe(200); // Checando se temos resposta 200 (Success Status) na rota.
    expect(response.body).toBeDefined(); // Checando se tem algo na rota.
    expect(response.body).toHaveLength(20); /// Testando se todos os meus itens estão Inseridos no Catalogo.
});

it("Testing Specific Routes of API", async () =>{
    const response = await request ("https://fakestoreapi.com/products/").get("/4");

    expect(response.status).toBe(200); // Checando se temos resposta 200 (Success Status) na rota.
    expect(response.body.id).toBe(4);
    expect(response.body.category).toBe("men's clothing");// Aqui eu so to brincando com a manipulação dos caminhos do Objeto
    expect(response.body.rating.rate).toBe(2.1);
})

it("Testing Object Creation of Products API", async() =>{
    fetchMock.mockResponseOnce(JSON.stringify({

        "id":2,
        "title":"Mens Casual Premium Slim Fit T-Shirts ",
        "price":22.3,
        "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category":"men's clothing",
        "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating":
            {"rate":4.1,"count":259}

    }));

    const response = await request ("https://fakestoreapi.com/products/").get("/2");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        "id":2,
        "title":"Mens Casual Premium Slim Fit T-Shirts ",
        "price":22.3,
        "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category":"men's clothing",
        "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating":
            {"rate":4.1,"count":259}
    });

})
    it("Testing /get Invalid Product", async () =>{

        const response = await request ("https://fakestoreapi.com/products").get("30");

        expect(response.status).toBe(404);
        expect(response.body).toMatchObject({});

    });
})