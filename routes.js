const Router = require("express");
const { createToken, getCustomers, getCustomerAccounts, getAllCustomerTransactions } = require("./finicity");
const api = Router();

api.post("/createToken", async (req, res) => {
  try {
    const token = await createToken(req.body.partnerId, req.body.partnerSecret, req.body.finicityAppKey);
    res.send({ token: token });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "something went wrong" });
  }
});

api.post("/customers", async (req, res) => {
  try {
    const customers = await getCustomers(req.body.authToken, req.body.finicityAppKey);
    res.send({ customers: customers });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "something went wrong" });
  }
});

api.post("/accounts", async (req, res) => {
  try {
    const customer_accounts = await getCustomerAccounts(req.body.authToken, req.body.finicityAppKey, req.body.customerId);
    res.send({ accounts: customer_accounts });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error:"something went wrong" });
  }
});

api.post("/transactions", async (req, res) => {
  try {
    const customer_transactions = await getAllCustomerTransactions(req.body.authToken, req.body.finicityAppKey, req.body.customerId);
    res.send({ transactions: customer_transactions });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "something went wrong" });
  }
});
BigInt.prototype.toJSON = function() { return this.toString() }

api.get("/transactions/:customerId", async (req, res) => {
  try {
    const customer_transactions = await getAllCustomerTransactions(req.query.authToken, req.params.customerId);
    // const serialized_transactions = JSON.parse(JSON.stringify(customer_transactions, (key, value) => typeof value === 'bigint' ? value.toString() : value));
    res.send({ transactions: customer_transactions });
  } catch (err) {
    console.error(err);
    res.status(err.status).send({ error: err.message });
  }
});
module.exports = api;