class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
      vector<vector<int>> result;
        
        recurPermute(result,0,nums);
        return result;
    }
    void recurPermute(vector<vector<int>> &result,int begin, vector<int>&num){
        if(begin>=num.size()){
            result.push_back(num);
        }
        for(int i=begin;i<num.size();i++){
            swap(num[i],num[begin]);
            recurPermute(result,begin+1,num);
            swap(num[i],num[begin]);
        }
    }
};