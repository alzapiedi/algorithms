Alpha Beta Pruning  

Is a depth first recursive pruning algorithm applied to minimax game tree.

Leaf board nodes are evaluated and pass restrictions back up to parent node:
  -Minimizing player restricts B, upper bound (nothing higher can result)
  -Maximizing player restricts A, lower bound (nothing lower can result)

(A < N < B)

Beta = The best that the minimizing player can achieve given that the opponent
       will maximize the value of the subtree.

Alpha = The best that the maximizing player can achieve given that the opponent
        will minimize the value of the subtree.

When a node is discovered such that A > B it is certain that this node will
not be selected, as a previously discovered move is guaranteed to be better.

ex: Min node has B = 2, A = 3, this means that this node will be ignored
    by the maximizing player with the option to select it because the best
    it can end with is a 2, while a previously discovered move had a minimum
    result (alpha) of 3.


If I am the maximizing player and I am evaluating a node with a beta of 2 and 
alpha of 3, this means that I have already calculated a prior subtree in which
the lowest possible value is 3.  If I were to choose the node with the beta of 2,
this gives the minimizing player the opportunity to make a move that will result
in a board value of 2.  It is safe to stop calculating all further moves
of this particular subtree because
