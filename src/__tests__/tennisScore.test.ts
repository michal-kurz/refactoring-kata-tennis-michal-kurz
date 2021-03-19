import { getScore } from "../tennisScore";

describe("tennisScore", () => {
  describe("getScore", () => {
    it("returns Love-All when the match starts", () => {
      const actual = getScore(0, 0);

      expect(actual).toBe("Love-All");
    });
  });
});
