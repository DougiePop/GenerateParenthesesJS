const generateParenthesis = (n) => {
    // variable ans will contain the array of every possible combination of balanced parenthesis
    const ans = [];
    // call the recursive backtrack function which go through every combination
    backtrack(ans, "", 0, 0, n)
    // return the array of every possible combination of balanced parenthesis
    return ans;
  }
  
  const backtrack = (ans, cur, open, close, max) => {
    // base case to return when the cur string has all open and closed parenthesis
    // since max is equal to the number of balanced parenthesis pair 
    // i.e. if max = 3 (pair of parenthesis), cur.length should equal 6 in order to return
    // return when cur.length is equal to max * 2 since every open parenthesis must have a close parenthesis
    if (cur.length === max * 2) {
      ans.push(cur);
      return;
    }
  
    // if open parenthesis count is greater than closed parenthesis count
    // then we must use recursion and add closed parenthesis to the cur string and increment close by 1
    if (open > close) {
      backtrack(ans, cur + ")", open, close + 1, max);
    } 
  
    // if open parenthesis count is less than max (the number of balanced parenthesis pair)
    // then we use recursion and add a open parenthesis to the cur string and increment open by 1
    if (open < max) {
      backtrack(ans, cur + "(", open + 1, close, max)
    }
  }