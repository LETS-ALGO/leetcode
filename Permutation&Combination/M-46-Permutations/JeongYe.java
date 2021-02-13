
class Solution {

    public void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public void permutation(List<List<Integer>> result, int[] nums, int depth, int r) {
        if (depth == r) {
            List<Integer> row = new ArrayList<>();

            for (int num : nums) {
                row.add(num);
            }
            result.add(row);
            return;
        }

        for (int i = depth; i < nums.length; i++) {
            swap(nums, depth, i);
            permutation(result, nums, depth + 1, r);
            swap(nums, depth, i);
        }
    }

    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        permutation(result, nums, 0, nums.length);

        return result;
    }
}