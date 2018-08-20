App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    // Load pets.
    $.getJSON('../clothes.json', function(data) {
      var clothesRow = $('#clothesRow');
      var clothTemplate = $('#clothTemplate');

      for (i = 0; i < data.length; i ++) {
        clothTemplate.find('.panel-title').text(data[i].name);
        clothTemplate.find('img').attr('src', data[i].picture);
        clothTemplate.find('.cloth-prize').text(data[i].prize);
        clothTemplate.find('.cloth-number').text(data[i].number);
        clothTemplate.find('.cloth-location').text(data[i].location);
        clothTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        clothesRow.append(clothTemplate.html());
      }
    });

    return App.initWeb3();
  },

  initWeb3: function() {
    // Is there an injected web3 instance?
if (typeof web3 !== 'undefined') {
  App.web3Provider = web3.currentProvider;
} else {
  // If no injected web3 instance is detected, fall back to Ganache
  App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Apparel.json', function(data) {
  // Get the necessary contract artifact file and instantiate it with truffle-contract
  var ApparelArtifact = data;
  App.contracts.Apparel = TruffleContract(ApparelArtifact);

  // Set the provider for our contract
  App.contracts.Apparel.setProvider(App.web3Provider);

  // Use our contract to retrieve and mark the adopted pets
  return App.markAdopted();
});
    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function(customer, account) {
    var adoptionInstance;

App.contracts.Apparel.deployed().then(function(instance) {
  adoptionInstance = instance;

  return adoptionInstance.getCustomer.call();
}).then(function(customer) {
  for (i = 0; i < customer.length; i++) {
    if (customer[i] !== '0x0000000000000000000000000000000000000000') {
      $('.panel-cloth').eq(i).find('button').text('Success').attr('disabled', true);
    }
  }
}).catch(function(err) {
  console.log(err.message);
});
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var customerId = parseInt($(event.target).data('id'));

    var adoptionInstance;

web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

  var account = accounts[0];

  App.contracts.Apparel.deployed().then(function(instance) {
    adoptionInstance = instance;

    // Execute adopt as a transaction by sending account
    return adoptionInstance.adopt(customerId, {from: account});
  }).then(function(result) {
    return App.markAdopted();
  }).catch(function(err) {
    console.log(err.message);
  });
});
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
