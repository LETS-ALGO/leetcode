class Solution {
    public List<String> findRepeatedDnaSequences(String s) {
        HashMap<String, Integer> map = new HashMap<>();
        List<String> answer = new ArrayList<>();
        StringBuilder sb = new StringBuilder(s);
        for(int i=0; i<=s.length()-10; i++){
            System.out.println(i);
            String a = sb.substring(i,i+10).toString();
            if(map.containsKey(a)){
                map.put(a, map.get(a)+1);
            }else{
                map.put(a, 1);
            }
        }
        for(String key : map.keySet()){
            if(map.get(key)>1) answer.add(key);
        }
        return answer;
    }
}