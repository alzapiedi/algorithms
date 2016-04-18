class Node
  attr_reader :parent, :value
  attr_accessor :left, :right
  def initialize(value, parent = nil)
    @value = value
    @parent = parent
  end
end

def min_tree(arr)
  l = arr.length
  left = arr[0...(l/2)]
  mid = arr[l/2]
  right = arr[(l/2 + 1)..-1]
  return nil if mid.nil?
  node = Node.new(mid)
  node.left = min_tree(left)
  node.right = min_tree(right)
  node
end

arr = [1,2,3,4,5,6,7,8]
