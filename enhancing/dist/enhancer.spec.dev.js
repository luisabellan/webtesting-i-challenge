"use strict";

var enhancer = require('./enhancer.js'); // test away!


describe("enhancer unit tests", function () {
  it("repair item", function () {
    expect(enhancer.repair({
      name: 'turbo',
      enhancement: 3,
      durability: 4
    })).toStrictEqual({
      name: 'turbo',
      enhancement: 3,
      durability: 100
    });
  });
  it("succeed item when enhancement equals to 20", function () {
    expect(enhancer.succeed({
      name: 'turbo',
      enhancement: 20,
      durability: 4
    })).toStrictEqual({
      name: 'turbo',
      enhancement: 20,
      durability: 4
    });
  });
  it("succeed item when enhancement does not equal to 20", function () {
    expect(enhancer.succeed({
      name: 'turbo',
      enhancement: 18,
      durability: 4
    })).toStrictEqual({
      name: 'turbo',
      enhancement: 19,
      durability: 4
    });
  });
  it("fails item's enhancement is less than 15", function () {
    expect(enhancer.fail({
      name: 'turbo',
      enhancement: 14,
      durability: 20
    })).toStrictEqual({
      name: 'turbo',
      enhancement: 14,
      durability: 15
    });
  });
  it("fails item's enhancement is 15 ", function () {
    expect(enhancer.fail({
      name: 'turbo',
      enhancement: 15,
      durability: 20
    })).toStrictEqual({
      name: 'turbo',
      enhancement: 15,
      durability: 10
    });
  });
  it("fails item's enhancement is  15  or more", function () {
    expect(enhancer.fail({
      name: 'turbo',
      enhancement: 15,
      durability: 20
    })).toStrictEqual({
      name: 'turbo',
      enhancement: 15,
      durability: 10
    });
    expect(enhancer.fail({
      name: 'turbo',
      enhancement: 16,
      durability: 20
    })).toStrictEqual({
      name: 'turbo',
      enhancement: 16,
      durability: 10
    });
  });
  it("fails item's enhancement is greater than 16", function () {
    expect(enhancer.fail({
      name: 'turbo',
      enhancement: 17,
      durability: 20
    })).toStrictEqual({
      name: 'turbo',
      enhancement: 16,
      durability: 20
    });
  });
});
/*   it("items", () => {
      expect(enhancer.items({
          name: 'turbo',
          enhancement: 18,
          durability: 4
      })).toStrictEqual({
          name: 'turbo',
          enhancement: 19,
          durability: 4
       })
  }) */