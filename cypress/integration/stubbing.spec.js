describe("Example stubbing", () => {
    before(() => {
        cy.visit("https://blog.ippon.tech/");
    });
    it("Verify post", () => {
        cy.server();
        // cy.get(
        //     "#mauticform_input_formulairenewsletterblogippontech_email_address"
        // )
        //     .type("Test@gmail.com")
        //     .get(
        //         "#mauticform_input_formulairenewsletterblogippontech_first_name"
        //     )
        //     .type("mike")
        //     .get(
        //         "#mauticform_input_formulairenewsletterblogippontech_last_name"
        //     )
        //     .type("lastName")
        //     .get("#mauticform_input_formulairenewsletterblogippontech_company")
        //     .type("company")
        //     .get("#mauticform_input_formulairenewsletterblogippontech_go")
        //     .click();
        // cy.wait(5000);
        cy.route({
            method: "GET",
            url: "https://test-ippon.ghost.io/ghost/api/v0.1/tags/**"
        }).as("get");
        cy.get("#search-input").type("checker");
        cy.wait("@get").then(xhr => {
            cy.log(xhr.requst.body);
        });
    });
});
