pub(crate) mod _682cal {
  pub struct Solution;

  impl Solution {
    pub fn cal_points(ops: Vec<String>) -> i32 {
      let mut res = vec![];
      ops.iter().for_each(|x| {
        match x.as_str() {
          "+" => {
            res.push(res.iter().rev().take(2).sum());
          }
          "D" => {
            res.push(res.last().unwrap() * 2);
          }
          "C" => {
            res.pop();
          }
          _ => {
            res.push(x.parse::<i32>().unwrap() as i32);
          }
        }
      });
      res.iter().sum()
    }
  }
}