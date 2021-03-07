class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> answer = new LinkedList<>();
        List<Integer> list = new LinkedList<>();
        solve(answer, target, 0, list, candidates, 0);
        return answer;
    }
    
    public void solve(List<List<Integer>> answer, int target, int sum, List<Integer> list, int[] candidates, int start ){
        
        if(sum>target) return;
        if(sum==target){
            answer.add(new LinkedList<>(list));
            // System.out.println(list);
            return;
        }
        
        for(int i=start; i<candidates.length; i++){
            list.add(candidates[i]);
            solve(answer, target, sum+candidates[i], list, candidates, i);
            list.remove(list.size()-1);
            // solve(answer, target, sum, list, candidates);
        }
    }
}
