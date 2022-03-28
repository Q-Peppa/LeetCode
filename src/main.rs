mod sec;
mod _682cal;

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

#[cfg(test)]
mod tests {
  use sec::sec::Solution as Solution693;
  use _682cal::_682cal::Solution as Solution682;
  use super::Solution;

  #[test]
  fn code2082() {
    assert_eq!(Solution::missing_rolls(vec![3, 2, 4, 3], 4, 2), vec![6, 6]);
    assert_eq!(Solution::missing_rolls(vec![1], 3, 1), vec![5]);
  }

  #[test]
  fn code693() {
    assert_eq!(Solution693::has_alternating_bits(5), true);
    assert_eq!(Solution693::has_alternating_bits(7), false);
    assert_eq!(Solution693::has_alternating_bits(11), false);
  }

  #[test]
  fn code682() {
    let var1: Vec<String> = vec!["5".to_string(), "2".to_string(), "C".to_string(), "D".to_string(), "+".to_string()];
    assert_eq!(Solution682::cal_points(var1), 30);
  }
}