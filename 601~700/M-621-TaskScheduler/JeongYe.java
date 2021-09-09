/**
 * 1. idle의 개수는 가장 빈도수가 큰 테스크와 연관 되어있다.
 * 2. A _ _ A _ _ A (빈도수가 3 이라면 중간에 들어갈 수 있는 idle 개수는 (3 - 1) * n 이다.)
 * 3. 빈도수가 큰 테스크 부터 idle사이에 끼워넣는다.
 *
 */

class Solution {
    public int leastInterval(char[] tasks, int n) {
        int [] frequency = new int[26];

        for(char task : tasks) {
            frequency[task - 'A']++; //각 테스크의 빈도수를 구한다.
        }

        Arrays.sort(frequency); //빈도수를 오름차 순으로 정렬

        int maxFreq = frequency[25] - 1;
        int idle = (maxFreq) * n; //가장 큰 빈도수 기준으로 사이에 끼워넣을수 있는 idle을 구한다.

        for(int i = 24; i>=0; --i) {
            idle -= Math.min(maxFreq, frequency[i]);
        }

        return idle > 0 ? idle + tasks.length : tasks.length ;
    }
}