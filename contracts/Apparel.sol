pragma solidity ^0.4.17;

contract Apparel {
address[16] public customer;

// apparel purchase
function adopt(uint customerId) public returns (uint) {
  require(customerId >= 0 && customerId <= 15);

  customer[customerId] = msg.sender;

  return customerId;
}
// Retrieving the customer
function getCustomer() public view returns (address[16]) {
  return customer;
}
}