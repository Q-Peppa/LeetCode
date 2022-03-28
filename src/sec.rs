pub(crate) mod sec {
  pub struct Solution;
  impl Solution {
    pub fn has_alternating_bits(n: i32) -> bool {
      let right = n ^ (n >> 1);
      (right & (right + 1)) == 0
    }
  }
}