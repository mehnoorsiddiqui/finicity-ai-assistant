const { ApiError, Client, AccountsController, AuthenticationController, CustomersController, TransactionsController } = require('finicity-apislib');

const client = new Client({
    timeout: 50000,
    // finicityAppKey: 'bb78291718b6eb8d078e8651f6d7998d',
});


async function createToken(partnerId, partnerSecret, finicityAppKey) {

    const newClient = client.withConfiguration({ finicityAppKey: finicityAppKey })
    const authenticationController = new AuthenticationController(newClient);

    const body = {
        partnerId: partnerId,
        partnerSecret: partnerSecret,
    };

    try {
        const { result } = await authenticationController.createToken(body);
        return result.token;
    } catch (error) {
        if (error instanceof ApiError) {
            return error;
        }
        return error;
    }
}

async function getCustomers(authToken, finicityAppKey) {
    const newClient = client.withConfiguration({ finicityAppKey: finicityAppKey, finicityAppToken: authToken })
    const customersController = new CustomersController(newClient);

    try {
        const { result } = await customersController.getCustomers();
        return result.customers;
    } catch (error) {
        if (error instanceof ApiError) {
            return error;
        }
        return error;
    }
}

async function getCustomerAccounts(authToken, finicityAppKey, customerId) {
    const newClient = client.withConfiguration({ finicityAppKey: finicityAppKey, finicityAppToken: authToken });
    const accountsController = new AccountsController(newClient);
    try {
        const { result } = await accountsController.getCustomerAccounts(customerId);
        return result.accounts;
    } catch (error) {
        if (error instanceof ApiError) {
            return error;
        }
        return error;
    }
}


async function getAllCustomerTransactions(authToken, finicityAppKey, customerId) {
    const newClient = client.withConfiguration({ finicityAppKey: finicityAppKey, finicityAppToken: authToken })
    const transactionsController = new TransactionsController(newClient);

    const fromDate = 1488365858;
    const toDate = 1653110643;

    try {
        const { result } = await transactionsController.getAllCustomerTransactions(customerId, fromDate, toDate);
        return result.transactions;
    } catch (error) {
        if (error instanceof ApiError) {
            return error;
        }
        return error;
    }
}
module.exports = { createToken, getCustomers, getCustomerAccounts, getAllCustomerTransactions };

