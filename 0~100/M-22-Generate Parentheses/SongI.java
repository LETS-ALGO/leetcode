class Solution {
    static String open = "(";
    static String close = ")";

    public List<String> generateParenthesis(int n) {
        // '(' + ')' 조합으로 n 번 만들때 올바른 것만 추출하기
        // 브루트 포스로 조합만들기
        List<String> list = new ArrayList<>();
        solve(list, n, 0, 0, "");
        return list;
    }

    public void solve(List<String> list, int n, int o, int c, String s) {
        if (s.length() == 2 * n) {
            if (isOk(s)) list.add(s);
            return;
        }

        if (o < n) solve(list, n, o + 1, c, s + open);
        if (c < n) solve(list, n, o, c + 1, s + close);
    }

    public boolean isOk(String s) {
        Stack<String> st = new Stack<>();
        String[] arr = s.split("");
        for (int i = 0; i < s.length(); i++) {
            if (st.isEmpty()) st.add(arr[i]);
            else {
                String p = st.peek();
                if (p.equals(open) && arr[i].equals(close)) st.pop();
                else st.add(arr[i]);
            }
        }
        if (st.isEmpty()) return true;
        return false;
    }

}