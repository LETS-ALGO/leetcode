class Solution {
    
    static String[][] digitsArray = {{},{}, {"a","b","c"}, {"d","e","f"}, {"g","h","i"}, {"j", "k", "l"}, {"m","n","o"}, {"p","q","r","s"},
                       {"t","u","v"}, {"w","x","y","z"}};
    
    public List<String> letterCombinations(String digits) {
    
        List<String> temp = new ArrayList<>();q
        List<String> answer = new ArrayList<>();
        for(int i=0; i<digits.length(); i++){
            int num = digits.charAt(i)-'0';
            String[] s =digitsArray[num];
            if(answer.size() == 0) {
                for(String letter : s){
                    temp.add(letter);
                }
            }else {
                // answer = new ArrayList<>();
                for(String letter : s){
                    for(int j=0; j< answer.size(); j++){
                        String newLetter = answer.get(j)+letter;
                        temp.add(newLetter);
                    }
                }
            }
            answer = temp;
            temp = new ArrayList<>();
        }
        return answer;
    }
}
