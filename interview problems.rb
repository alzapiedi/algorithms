# Interview Cake
def condense_meeting_times(arr)
  booked = Hash.new(false)
  condensed = []
  arr.each do |sub_arr|
    (sub_arr[0]...sub_arr[1]).each { |time| booked[time] = true }
  end
  t = 0
  while t < 48
    if booked[t]
      start = t
      until !booked[t]
        t+=1
      end
      finish = t
      condensed << [start, finish]
    end
      t+=1
  end
  condensed
end
condense_meeting_times([[0,1],[3,5],[4,8],[9,10],[10,12]])

# Interview Cake
def stock_picker(prices)
  min = [prices[0],prices[1]].min
  max = [prices[0],prices[1]].max
  best = prices[1]-prices[0]
  prices.each_with_index do |price, i|
    next if i < 2
    current = price
    dif = current - min
    best = dif if dif > best
    max = current if current > max
    min = current if current < min
  end
  best
end
stock_picker([10,7,5,8,11,9])
