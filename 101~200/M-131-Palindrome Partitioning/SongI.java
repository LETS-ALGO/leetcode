class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> answer = new ArrayList<>();
        solve(s, answer, new ArrayList<>());
        return answer;
    }

    public void solve(String s, List<List<String>> answer, List<String> list){
        if(s.isEmpty()){
            answer.add(new ArrayList<String>(list));
            return;
        }

        for(int i=1; i<=s.length(); i++){
            if(!isPalindrome(s.substring(0, i))) continue;
            list.add(s.substring(0,i));
            solve(s.substring(i, s.length()), answer, list);
            list.remove(list.size()-1);
        }
    }

    public boolean isPalindrome(String s){
        for(int i=0; i<s.length()/2; i++){
            if(s.charAt(i)!=s.charAt(s.length()-1-i))
                return false;
        }
        return true;
    }
}