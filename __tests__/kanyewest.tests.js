const request = require("supertest");   

describe ("API Kanye West Quote", () =>{

  it("API response is okay", async () =>{

    const response = await request("https://api.kanye.rest").get("/");

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body).not.toBe({})

 
  })
    

});