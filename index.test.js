const { initialiseDeck, shuffle } = require("./index");
let deck = initialiseDeck();
describe("Task 1: Deck", () => {
  test("should have 40 cards", () => {
    expect(deck.length).toBe(40);
  });

  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const shuffledDeck = shuffle([...values], values.length);

  test("should be shuffled and have same length", () => {
    expect(shuffledDeck).not.toEqual(values);
    expect(shuffledDeck.length).toBe(values.length);
  });
});
