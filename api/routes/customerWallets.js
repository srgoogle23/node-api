module.exports = app => {
  const controller = app.controllers.customerWallets;

  app.route('/api/v1/wallets')
    .get(controller.listCustomerWallets)
    .post(controller.saveCustomerWallets);

  app.route('/api/v1/wallets/:customerId')
    .get(controller.listCustomerWalletsById)
    .delete(controller.removeCustomerWallets)
    .put(controller.updateCustomerWallets);
}