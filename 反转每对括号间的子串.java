class Solution {
	public String reverseParentheses(String s) {
		Stack<Character> stack = new Stack();
		for (int i=0; i<s.length(); i++) {
			if(s.charAt(i)!=')'){
				stack.push(s.charAt(i));
			}else{
				StringBuilder sb = new StringBuilder();
				while (stack.peek()!='(') {
					sb.append(stack.pop());
				}
				stack.pop();
				//sb--->stack
				for(char c:sb.toString().toCharArray()){
					stack.push(c);
				}      	      	

			}
		}
			// System.out.println(stack);
			// return stack.toString();
		StringBuilder sb = new StringBuilder();
		while (stack.size()>0) {
			sb.append(stack.pop());
		}
		return sb.reverse().toString();
	}
}