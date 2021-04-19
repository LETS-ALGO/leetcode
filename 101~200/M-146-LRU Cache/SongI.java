import java.util.*; 
class LRUCache {
    class Pair{
        int key, value;
        Pair(int key, int value){
            this.key = key;
            this.value = value;
        }
    }
    
    ArrayList<Pair> LRU = new ArrayList<>();
    public LRUCache(int capacity) {
        for(int i=0; i<capacity; i++) LRU.add(new Pair(-1,-1));
    }
    
    public int get(int key) {
        for(int i=0; i<LRU.size(); i++){
            Pair p = LRU.get(i);
            if(p.key == key){
                int value = p.value;
                LRU.remove(i);
                LRU.add(new Pair(key, value));
                return value;
            }
        }
        return -1;
    }
    
    public void put(int key, int value) {
        int size = LRU.size();
        boolean check = false;
        for(int i=0; i<LRU.size(); i++){
            if(LRU.get(i).key == key){
                LRU.remove(i);
                check = true;
            }
        }
        if(LRU.size()>0 && !check) LRU.remove(0);
        if(size>0) LRU.add(new Pair(key, value));
    }
}
