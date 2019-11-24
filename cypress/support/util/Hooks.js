class Hooks
{
getHooks() {
    before(function()
    {
        //runs once before all tests in the block
        cy.log('Comes from hooks..');
    })

    after(function()
    {
        //runs once after all tests in the block
    })

    beforeEach(function()
    {
        //runs before each test in the block
    })

    afterEach(function()
    {
        //runs after each test in the block
    })
}
}

export default Hooks