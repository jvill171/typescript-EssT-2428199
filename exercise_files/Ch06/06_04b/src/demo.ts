interface Customer {
    /** saves the customers somewhere */
    save(): void
}

class Customer{}

const customer = new Customer();
customer.save = function() {}

const myVar = window.MY_VAR