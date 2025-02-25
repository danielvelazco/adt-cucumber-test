import assert from 'assert';
import { Given, When, Then, After } from '@cucumber/cucumber';
import Inventory from '../../inventory.mjs';

let inventory;

Given('I have {int} {word}', function (count, item) {
  inventory = inventory || new Inventory();
  inventory.addItem(item, count);
});

When('I eat {int} {word}', function (count, item) {
  inventory.removeItem(item, count);
});

Then('Now I have {int} {word}', function (expectedCount, item) {
  assert.strictEqual(inventory.getItemCount(item), expectedCount, `Expected ${expectedCount} but got ${inventory.getItemCount(item)}`);
});

When('I make a {word} with {int} {word} and {int} {word}', function (item1, item2Count, item2, item3Count, item3) {
  inventory.removeItem(item2, item2Count);
  inventory.removeItem(item3, item3Count);
  inventory.addItem(item1, 1);
});

Then('I should see an error message saying "Not enough {word} to eat!"', function (item) {
  assert.strictEqual(inventory.error, `Not enough ${item} to eat!`);
});

// Clear invetory after each scenario
After(function () {
  inventory.clear()
})
