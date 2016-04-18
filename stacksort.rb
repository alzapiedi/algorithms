class Stack
  attr_reader :stack
  def initialize
    @stack = []
  end

  def peek
    @stack.last
  end

  def pop
    @stack.pop
  end

  def push(x)
    @stack.push(x)
  end

  def is_empty?
    @stack.empty?
  end
end

def sort_stack(stack)
  temp = Stack.new
  until stack.is_empty?
    mem = stack.pop
    until temp.is_empty? || mem >= temp.peek
      stack.push(temp.pop)
    end
    temp.push(mem)
  end
  until temp.is_empty?
    stack.push(temp.pop)
  end
  stack
end

s1 = Stack.new
s1.push(4)
s1.push(5)
s1.push(2)
s1.push(1)
s1.push(3)
