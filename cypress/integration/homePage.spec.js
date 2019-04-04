describe("UI Home page tests", () => {
    before(() => {
        cy.visit("https://blog.ippon.tech/");
    });

    it("Verify Logo is visible", () => {
        cy.get(".logo_ippon").should("be.visible");
    });

    it("Verify title is correct", () => {
        cy.title().should(
            "eq",
            "Ippon | Experts in Java Innovation, DevOps, Big Data, Front-end, & Back-end"
        );
    });

    it("Verify mail logo is visible", () => {
        cy.get("#contact_tel>img").should("be.visible");
    });

    it("Verify search logo is visible", () => {
        cy.get("#search-input").should("be.visible");
    });

    it("Verify cards are all visible", () => {
        cy.get(".card").should("be.visible");
    });

    it("Can interact like user", () => {
        cy.get(
            "#mauticform_input_formulairenewsletterblogippontech_email_address"
        )
            .scrollIntoView()
            .type("Test@gmail.com")
            .get(
                "#mauticform_input_formulairenewsletterblogippontech_first_name"
            )
            .type("mike")
            .get(
                "#mauticform_input_formulairenewsletterblogippontech_last_name"
            )
            .type("lastName")
            .get("#mauticform_input_formulairenewsletterblogippontech_company")
            .type("company", { delay: 1000 });
    });

    it("Scroll", () => {
        cy.get(".older-posts").scrollIntoView();
    });
});
