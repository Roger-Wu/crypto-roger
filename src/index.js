const contracts = {
  ItemToken: {
    address: '0xad56273c8268972341aAA9e2d999E4D0A00ec0F9',
    abi: [{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"tokenExists","outputs":[{"name":"_exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdrawAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_itemId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"_implements","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_admin","type":"address"}],"name":"removeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_itemRegistry","type":"address"}],"name":"setItemRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_itemId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_admin","type":"address"}],"name":"isAdmin","outputs":[{"name":"_isAdmin","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"approvedFor","outputs":[{"name":"_approved","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"allOf","outputs":[{"name":"_owner","type":"address"},{"name":"_startingPrice","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"_nextPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"listItemFromRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemId","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"_owner","type":"address"}],"name":"listItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_from","type":"uint256"},{"name":"_take","type":"uint256"}],"name":"itemsForSaleLimit","outputs":[{"name":"_items","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOf","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"nextPriceOf","outputs":[{"name":"_nextPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_price","type":"uint256"}],"name":"calculateDevCut","outputs":[{"name":"_devCut","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_admin","type":"address"}],"name":"addAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enableERC721","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemIds","type":"uint256[]"}],"name":"populateFromItemRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_itemId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"startingPriceOf","outputs":[{"name":"_startingPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"priceOf","outputs":[{"name":"_price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_itemIds","type":"uint256[]"},{"name":"_price","type":"uint256"},{"name":"_owner","type":"address"}],"name":"listMultipleItems","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_price","type":"uint256"}],"name":"calculateNextPrice","outputs":[{"name":"_nextPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_itemId","type":"uint256"},{"indexed":true,"name":"_owner","type":"address"},{"indexed":false,"name":"_price","type":"uint256"}],"name":"Bought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_itemId","type":"uint256"},{"indexed":true,"name":"_owner","type":"address"},{"indexed":false,"name":"_price","type":"uint256"}],"name":"Sold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"}]
  }
}

var app = new Vue({
  el: '#app',
  data: {
    contractAddress: contracts.ItemToken.address,
    owner: '',
    startingPrice: 0,
    price: 0,
    nextPrice: 0,
    accountAddress: '',
    metamaskMsg: '請安裝並登入 MetaMask',
  },
  computed: {
    shortContractAddress: function() {
      return this.contractAddress.slice(0, 12) + '...';
    },
    shortOwner: function() {
      return this.owner.slice(0, 12) + '...';
    },
    startingPriceInEth: function() {
      return (this.startingPrice / 1000000000000000000).toFixed(6);
    },
    priceInEth: function() {
      return (this.price / 1000000000000000000).toFixed(6);
    },
    nextPriceInEth: function() {
      return (this.nextPrice / 1000000000000000000).toFixed(6);
    },
  },
  methods: {
    startApp: function() {
      const eth = new Eth(web3.currentProvider);
      this.itemTokenContract = eth.contract(contracts.ItemToken.abi).at(contracts.ItemToken.address);

      this.accountAddress = web3.eth.accounts[0];

      this.fetchContractState();
    },
    fetchContractState: function() {
      this.itemTokenContract.ownerOf(0).then((result) => {
        this.owner = result._owner;
      });
      this.itemTokenContract.startingPriceOf(0).then((result) => {
        this.startingPrice = result._startingPrice.toNumber(); // BN -> number
      });
      this.itemTokenContract.priceOf(0).then((result) => {
        this.price = result._price.toNumber(); // BN -> number
      });
      this.itemTokenContract.nextPriceOf(0).then((result) => {
        this.nextPrice = result._nextPrice.toNumber(); // BN -> number
      });
    },
    buy: function () {
      this.itemTokenContract.buy(0, { from: this.accountAddress, value: this.price, gasPrice: 1000000000}).catch((error) => {
        window.alert(this.metamaskMsg);
        console.log(error);
      }).then((result) => {
        console.log(result);
      });
    },
  },
  mounted () {
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      web3js = new Web3(web3.currentProvider);
      this.startApp();
    } else {
      window.alert(this.metamaskMsg)
    }
  },
});
