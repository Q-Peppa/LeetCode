bool init = false;
vector<vector<int>> p(1000000 + 1);
class Solution {
public:
    int findValidSplit(vector<int>& nums) {
        if (not init) {
            for (int i = 2; i <= 1000000; i += 1) {
                if (p[i].empty()) {
                    for (int j = i; j <= 1000000; j += i) {
                        p[j].push_back(i);
                    }
                }
            }
            init = true;
        }
        int n = nums.size();
        map<int, vector<int>> mp;
        for (int i = 0; i < n; i += 1) {
            for (int pi : p[nums[i]]) mp[pi].push_back(i);
        }
        vector<int> ans(n);
        for (auto& [_, v] : mp) {
            if (v.size() > 1) {
                int l = v[0], r = v.back();
                ans[l] += 1;
                ans[r] += -1;
            }
        }
        for (int i = 0; i + 1 < n; i += 1) {
            if (i) ans[i] += ans[i - 1];
            if (ans[i] == 0) return i;
        }
        return -1;
    }
};