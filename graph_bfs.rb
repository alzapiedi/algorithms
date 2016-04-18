# BFS graph path search

class GraphNode
  attr_reader :value, :children
  attr_accessor :parent
  def initialize(value, parent)
    @value = value
    @children = []
    if parent
      parent.add_child(self)
    end
  end

  def add_child(node)
    node.parent = self
    @children << node
  end

end

def path?(start, endnode)
  queue = [start]
  until queue.empty?
    node = queue.shift
    return true if node.value == endnode.value
    queue.concat(node.children)
  end
  return false
end
