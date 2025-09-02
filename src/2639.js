class Matrix {
	constructor(grid) {
		this.grid = grid;
		this.width = grid[0].length;
		this.height = grid.length;
	}
	swapLineAndColumn() {
		const res = [];
		for (let i = 0; i < this.width; i++) {
			const line = [];
			for (let j = 0; j < this.height; j++) {
				line.push(this.grid[j][i]);
			}
			res.push(line);
		}
		return res;
	}
	getLine(i) {
		return this.grid[i];
	}
	getLineMax(i, fn) {
		return Math.max(...this.getLine(i).map(fn));
	}
	mutateGrid(g) {
		this.grid = g;
		this.width = g[0].length;
		this.height = g.length;
	}
}
var findColumnWidth = function (grid) {
	const matrix = new Matrix(grid);
	matrix.mutateGrid(matrix.swapLineAndColumn());
	const res = [];
	for (let i = 0; i < matrix.height; i++) {
		res.push(matrix.getLineMax(i, (item) => item.toString().length));
	}
	return res;
};
