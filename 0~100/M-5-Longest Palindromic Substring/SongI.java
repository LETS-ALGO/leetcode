class Solution {
    public String longestPalindrome(String s) {
        String answer = "";

        char[] arr = s.toCharArray();

        for(int len = s.length(); len>=1; len--){
            // 글자 길이가 len 인것 부터 펠린드롬 탐색
            for (int start = 0; start + len <= s.length(); start++) {
                boolean flag = true;

                answer = s.substring(start, start+len);
                for (int i = 0; i < len/2; i++) {
                    if(arr[start+i] != arr[start+len-i-1]){
                        flag = false;
                        break;
                    }
                }
                // System.out.println(str+" "+len+" "+flag);
                if(flag) {
                    return answer;
                }
            }
        }
        return answer;
    }
}