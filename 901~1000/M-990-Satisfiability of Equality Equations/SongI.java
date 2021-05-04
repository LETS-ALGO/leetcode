class Solution {
    static int []arr;
    public boolean equationsPossible(String[] equations) {
        ArrayList<Integer>[] graph = new ArrayList[26];
        for(int i=0; i<26; i++) graph[i] = new ArrayList<>();

        for(String e:equations){
            if(e.charAt(1)=='='){ // 같다
                int x = e.charAt(0)-'a';
                int y = e.charAt(3)-'a';
                graph[x].add(y);
                graph[y].add(x);
            }
        } // 같은 것만 처리

        int [] c = new int [26];
        int t = 0;
        for(int start=0; start<26; ++start){
            if(c[start]==0){
                t++;
                Stack<Integer> st = new Stack();
                st.push(start);
                while(!st.isEmpty()){
                    int now = st.pop();
                    for(int next : graph[now]){
                        if(c[next] == 0){
                            c[next] = t;
                            st.push(next);
                        }
                    }
                }
            }
        } // 공통조상을 넣어준다



        for(String e:equations){
            if(e.charAt(1)=='!'){ // 다름
                int x = e.charAt(0)-'a';
                int y = e.charAt(3)-'a';
                if(x==y || c[x]!=0 && c[x]==c[y]) return false;

                // 다른건데 같은거라 하면 false
            }
        }
        return true;
    }
}