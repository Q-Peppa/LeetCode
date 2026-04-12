const countGoodSubseq = (nums, p, queries) => {
	const n = nums.length;

	const getPrimes = (x) => {
		const res = [];
		for (let i = 2; i * i <= x; i++) {
			if (x % i === 0) {
				res.push(i);
				while (x % i === 0) x = Math.floor(x / i);
			}
		}
		if (x > 1) res.push(x);
		return res;
	};

	const gcd = (a, b) => {
		while (b) {
			[a, b] = [b, a % b];
		}
		return a;
	};

	// 线段树：维护每个位置的缩放值（非活跃 = 0）
	// GCD(0, x) = x，所以 0 是 GCD 的单位元
	const tree = new Int32Array(4 * n);

	const build = (node, l, r) => {
		// 初始全为0
		if (l === r) {
			tree[node] = 0;
			return;
		}
		const m = (l + r) >> 1;
		build(2 * node, l, m);
		build(2 * node + 1, m + 1, r);
		tree[node] = 0;
	};

	const update = (node, l, r, pos, val) => {
		if (l === r) {
			tree[node] = val;
			return;
		}
		const m = (l + r) >> 1;
		if (pos <= m) update(2 * node, l, m, pos, val);
		else update(2 * node + 1, m + 1, r, pos, val);
		tree[node] = gcd(tree[2 * node], tree[2 * node + 1]);
	};

	const query = (node, l, r, ql, qr) => {
		if (ql > qr) return 0;
		if (ql <= l && r <= qr) return tree[node];
		const m = (l + r) >> 1;
		let res = 0;
		if (ql <= m) res = gcd(res, query(2 * node, l, m, ql, qr));
		if (qr > m) res = gcd(res, query(2 * node + 1, m + 1, r, ql, qr));
		return res;
	};

	build(1, 0, n - 1);

	// 活跃元素计数
	let activeCount = 0;
	// 每个位置的缩放值（0=不活跃）
	const scaledVal = new Int32Array(n);

	// 搜索：是否存在位置 i（活跃），去掉 i 后剩余 GCD = 1
	// 即 gcd(query(0,i-1), query(i+1,n-1)) = 1
	// 用线段树上的递归：携带"外部GCD"参数
	// existsRemovable(node, l, r, outerGcd):
	//   在区间[l,r]内找一个活跃位置i，使 gcd(outerGcd, gcd([l,r]除i)) = 1
	//   若 gcd(outerGcd, tree[node]) 已经 = 1（整个区间都不影响外部已经=1的情况下），
	//   则区间内任意活跃元素i：去掉i后，gcd = gcd(outerGcd, tree[其他])
	//   不一定=1，因为去掉i可能改变区间GCD。
	//
	// 正确递归：
	// existsRemovable(node, l, r, outerGcd):
	//   若区间内无活跃元素：返回false
	//   若 l=r（叶子）：i=l是活跃元素，去掉后贡献=0，总GCD=outerGcd，返回 outerGcd=1
	//   否则：
	//     leftGcd = tree[left_child], rightGcd = tree[right_child]
	//     // 尝试在左侧找：外部GCD = gcd(outerGcd, rightGcd)
	//     if existsRemovable(left, l, m, gcd(outerGcd, rightGcd)): return true
	//     // 尝试在右侧找：外部GCD = gcd(outerGcd, leftGcd)
	//     if existsRemovable(right, m+1, r, gcd(outerGcd, leftGcd)): return true
	//     return false
	//
	// 剪枝：若 gcd(outerGcd, tree[node]) = 1 且区间内活跃元素数 >= 1，
	//   去掉任意活跃元素i后，gcd >= gcd(outerGcd, 其他) >= 1，
	//   但不能保证=1（去掉i可能使区间GCD上升）。所以不能剪枝？
	//
	// 可以反向剪枝：若 outerGcd = 1，则无论去掉哪个i，总GCD=gcd(1,...)=1 ✓
	//   → 只要区间内有活跃元素，返回true

	const activeInRange = new Int32Array(4 * n); // 区间活跃元素数

	const updateActive = (node, l, r, pos, delta) => {
		activeInRange[node] += delta;
		if (l === r) return;
		const m = (l + r) >> 1;
		if (pos <= m) updateActive(2 * node, l, m, pos, delta);
		else updateActive(2 * node + 1, m + 1, r, pos, delta);
	};

	const existsRemovable = (node, l, r, outerGcd) => {
		if (activeInRange[node] === 0) return false;
		// 关键剪枝：外部GCD已经=1，去掉区间内任意活跃元素后总GCD=1
		if (outerGcd === 1) return true;
		if (l === r) {
			// 叶子：去掉该元素，贡献变0，总GCD=outerGcd
			return outerGcd === 1;
		}
		const m = (l + r) >> 1;
		const lg = tree[2 * node],
			rg = tree[2 * node + 1];
		// 在左侧找，右侧GCD作为外部的一部分
		if (existsRemovable(2 * node, l, m, gcd(outerGcd, rg))) return true;
		// 在右侧找，左侧GCD作为外部的一部分
		if (existsRemovable(2 * node + 1, m + 1, r, gcd(outerGcd, lg))) return true;
		return false;
	};

	const setPos = (i, val) => {
		// val=0 表示不活跃
		const old = scaledVal[i];
		if (old === val) return;
		if (old > 0 && val === 0) {
			activeCount--;
			updateActive(1, 0, n - 1, i, -1);
		}
		if (old === 0 && val > 0) {
			activeCount++;
			updateActive(1, 0, n - 1, i, 1);
		}
		scaledVal[i] = val;
		update(1, 0, n - 1, i, val);
	};

	const hasGoodSubseq = () => {
		if (activeCount === 0) return false;
		const totalGcd = tree[1]; // GCD of all active elements (0s are neutral)
		if (totalGcd !== 1) return false; // 全集GCD>1，任何子集GCD>1

		// 全集GCD=1
		if (activeCount < n) return true; // 直接取全集，长度<n ✓

		// activeCount = n，必须去掉一个
		// 找是否存在活跃元素i，去掉后GCD=1
		return existsRemovable(1, 0, n - 1, 0);
	};

	// 初始化
	for (let i = 0; i < n; i++) {
		if (nums[i] % p === 0) {
			setPos(i, nums[i] / p);
		}
	}

	let result = 0;
	for (const [ind, val] of queries) {
		setPos(ind, val % p === 0 ? val / p : 0);
		nums[ind] = val;
		if (hasGoodSubseq()) result++;
	}

	return result;
};
