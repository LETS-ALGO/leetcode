import java.util.*;

class Solution {
    public List<List<Integer>> permute(int[] nums) {

        List<List<Integer>> ans = new LinkedList<>();
        boolean[] check = new boolean[nums.length];
        List<Integer> list = new LinkedList<>();
        solve(ans, nums, list, check);
        return ans;
    }

    public void solve(List<List<Integer>> ans, int[] nums, List<Integer> list, boolean[] check) {

        if (nums.length == list.size()) {
            ans.add(new LinkedList<>(list));
            // System.out.println(ans+" "+ list);
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (check[i]) continue;

            check[i] = true;
            list.add(nums[i]);
            solve(ans, nums, list, check);
            check[i] = false;
            list.remove(list.size() - 1);
        }
    }

}