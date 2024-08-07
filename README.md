
# Data Structures Complexity Table

| Data Structure | Access  | Search  | Insertion | Deletion | Space Complexity |
|----------------|---------|---------|-----------|----------|------------------|
| **Array**      | O(1)    | O(n)    | O(n)      | O(n)     | O(n)             |
| **Linked List**| O(n)    | O(n)    | O(1)      | O(1)     | O(n)             |
| **Hash Map**   | O(1)    | O(1)    | O(1)      | O(1)     | O(n)             |
| **Binary Search Tree (BST)** | O(n) | O(n) | O(n) | O(n) | O(n)   |
| **Balanced BST (e.g., AVL, Red-Black Tree)** | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| **Heap**       | O(n)    | O(log n) | O(log n) | O(log n) | O(n)             |
| **Stack**      | O(n)    | O(n)    | O(1)      | O(1)     | O(n)             |
| **Queue**      | O(n)    | O(n)    | O(1)      | O(1)     | O(n)             |
| **Trie**       | O(m)    | O(m)    | O(m)      | O(m)     | O(α^m * m)       |

**Notes:**
- `n` is the number of elements.
- `m` is the length of the key for operations in a Trie.
- `α` is the size of the alphabet in a Trie.
- **LinkedList:** O(1) to insert. O(n) to lookup worst case.
   - insert: O(1)
   - lookup: O(n)
- **Hash Map:** Worst-case time complexity for search, insertion, and deletion can degrade to O(n) with poor hashing functions and many collisions.
   - insert: O(1)
   - key lookup: O(1)
   - value lookup: O()
- **Balanced BST:** Guarantees O(log n) for search, insertion, and deletion due to maintaining a balanced height. O(n) to lookup worst case, even though best case and average lookup is O(log n).
- **Graphs:**
 - Adjaceny List: Space Complexity O(|V| + |E|) Time Complexity: O(1)
   - remove edge: O(|E|)
   -remove vertex: O(|V| + |E|)
 - Adjaceny Matrix: Space Complexity O(|V|^2) Time Complexity: O(|V|^2)
   - remove edge: O(1)
   - remove vertex: O(|V|^2)
