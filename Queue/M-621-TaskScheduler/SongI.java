import java.util.*;
class Solution {
    public int leastInterval(char[] tasks, int n) {
        if(n==0) return tasks.length;
        int []t = new int [26];
        for(char c:tasks){
            t[c-'A']++;
        }
        Arrays.sort(t);

        int remains = 0;
        for(int i=0; i<26; i++){
            if(t[i]==t[25]) remains++;
        }

        int answer = Math.max((n+1)*(t[25]-1)+remains, tasks.length);
        return answer;
    }
}