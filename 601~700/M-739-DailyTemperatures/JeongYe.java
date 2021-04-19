import java.util.Stack;

public class Solution {
    public int[] dailyTemperatures(int[] T) {
        Stack<Integer> stack = new Stack<>(); //배열 인덱스값 스택에 관리

        int[] answer = new int[T.length];

        for (int i = T.length - 1; i >= 0; i--) {

            //스택의 맨위 값이 현재 값보다 작으면 스택에서 뺀다
            while (!stack.isEmpty() && T[stack.peek()] <= T[i]) {
                stack.pop();
            }

            //현재 온도보다 큰 기온의 인덱스가 스택의 맨위에 담겨있다.
            answer[i] = stack.isEmpty() ? 0 : stack.peek() - i;
            stack.push(i);
        }

        return answer;
    }
}
}