pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Apparel.sol";

contract TestApparel {
  Apparel apparel = Apparel(DeployedAddresses.Apparel());


// Testing the adopt() function
function testUserCanAdoptPet() public {
  uint returnedId = apparel.adopt(8);

  uint expected = 8;

  Assert.equal(returnedId, expected, "Adoption of pet ID 8 should be recorded.");
}
// Testing retrieval of a single pet's owner
function testGetCustomerAddressByCustomertId() public {
  // Expected owner is this contract
  address expected = this;

  address adopter = apparel.customer(8);

  Assert.equal(adopter, expected, "Owner of pet ID 8 should be recorded.");
}
// Testing retrieval of all pet owners
function testGetCustomerAddressByCustomertIdInArray() public {
  // Expected owner is this contract
  address expected = this;

  // Store customer in memory rather than contract's storage
  address[16] memory customer = apparel.getCustomer();

  Assert.equal(customer[8], expected, "Owner of customer ID 8 should be recorded.");
}
}