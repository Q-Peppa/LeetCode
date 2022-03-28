pub struct Solution;

impl Solution {
    pub fn missing_rolls(rolls: Vec<i32>, mean: i32, n: i32) -> Vec<i32> {
        let sum = (rolls.len() as i32 + n) * mean - rolls.iter().sum::<i32>();
        match sum < n || sum > 6 * n {
            true => vec![],
            false => [
                vec![sum / n; (n - sum % n) as usize],
                vec![sum / n + 1; (sum % n) as usize],
            ]
            .concat(),
        }
    }
}

fn main() {
    let f = Solution::missing_rolls(vec![1, 5, 6], 3, 4);
    println!("{:?}", f);
}
