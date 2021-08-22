class Solution {
    public String removeKdigits(String num, int k) {
        if(k==0) return num;
        if(num.length() == k) return "0";

        int length = num.length();
        int resultLength = length - k;

        Stack<Integer> result = new Stack<>();

        for(int i = 0; i < length; i++ ){
            int curr = num.charAt(i)-'0';
            // 삭제 조건 (greedy)
            // 스택에서 peek()한수, 즉 이전의 숫자가 현재의 숫자(curr)보다 클때,
            //  result.size() + length >= resultLength + i + 1
            while (result.size() != 0 && result.peek() > curr
                    && result.size() + length >= resultLength + i + 1){
                result.pop();
                k--;
            }

            result.push(curr);
        }


        StringBuilder sb = new StringBuilder();
        while( result.size() > 0){
            sb.insert(0, result.pop());
        }

        // 앞의 글자가 0 인것들을 뺀다 ex 0200 -> 200
        while( sb.length() > 1 && sb.charAt(0) == '0'){
            sb.delete(0, 1);
        }

        // 문자열의 길이보다 지워야할 갯수가 더 많으므로 0
        if(k - sb.length() > 0)  return  "0";

        // 뒤에 글자부터 지워준다.
        while(k > 0){
            sb.delete(sb.length() - 1, sb.length());
            k--;
        }

        return sb.toString();
    }
}