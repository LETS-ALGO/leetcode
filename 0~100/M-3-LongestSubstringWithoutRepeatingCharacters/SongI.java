class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashSet<String> set = new HashSet<>();
        StringBuilder sb = new StringBuilder("");
        int max = 0;
        for(int i=0; i<s.length(); i++){
            String c = String.valueOf(s.charAt(i));
            if(!set.add(c)){
                // 이미 있는 글자 일때
                // 중복된 글자의 index를 찾아 그 뒤의 index를 지운다.
                //max = Math.max(max, sb.length());
                int idx = sb.indexOf(c);
                sb.delete(0,idx+1);

            }
            sb.append(c);
            max = Math.max(max, sb.length());
        }
        return max;
    }
}