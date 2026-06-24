const connection = require("../database/config/connection.js");
const { dbBuild } = require("../database/config/build");
const { getData } = require("../database/queries/getData");
const { postData } = require("../database/queries/postData");


beforeEach(() => dbBuild());


test("jest is working", () => {
    expect(1).toBe(1);
});


test("test getData query", async () => {

    const data = await getData();

    expect(data.rows.length).toBe(3);

});


test("test postData query", async () => {

    await postData({
        name: "Hussein",
        location: "palestine"
    });


    const data = await getData();


    expect(data.rows.length).toBe(4);


    expect(data.rows[3].name)
        .toBe("Hussein");

});
afterAll(() => {

    connection.end();

});