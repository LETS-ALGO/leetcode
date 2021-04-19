class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        sort(candidates.begin(), candidates.end());
        vector<vector<int>> result;
        vector<int> combine;
        combineSum(candidates, result, combine, target, 0);
        return result;
    }
private:
    void combineSum(vector<int>& candidates,vector<vector<int>> &result, vector<int>combine, int target, int begin){
    if(target==0){
        result.push_back(combine);
        return;
    }    
        for(int i=begin; i!=candidates.size() && target>=candidates[i]; i++){
            combine.push_back(candidates[i]);
            combineSum(candidates,result, combine, target-candidates[i], i);
            combine.pop_back();
        }
    }    
};