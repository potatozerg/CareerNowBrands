describe("Test Function", function () {

  beforeEach(function() {
    grid = [];
    size = 500;
  });
  it("size should be 500", function () {
    expect(size).toBe(500);
  });
  it("init function should change grid size", function () {
    expect(grid.length).toBe(0);
    init();
    expect(grid.length).toBe(500);
  });
  it("update function should make a grid with 1s to 0s", function () {
    size = 10;
    grid = [
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1]
    ];
    update();
    expect(grid[3][3]).toBe(0);
  });
});
