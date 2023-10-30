//Given an array of numbers, return an array where each element is the product of all the elements in the original array except the current element.

function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
      return intervals; // No need to merge if there are 0 or 1 intervals
    }
  
    // Sort the intervals based on the start times
    intervals.sort((a, b) => a[0] - b[0]);
  
    const mergedIntervals = [intervals[0]]; // Initialize with the first interval
    let currentIndex = 0;
  
    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const previousInterval = mergedIntervals[currentIndex];
  
      if (currentInterval[0] <= previousInterval[1]) {
        // There is an overlap, merge the intervals
        previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
      } else {
        // No overlap, add the current interval to the merged intervals
        mergedIntervals.push(currentInterval);
        currentIndex++;
      }
    }
  
    return mergedIntervals;
  }
  
  // Example usage:
  const intervals = [[2, 6], [5, 9], [4, 9]];
  const merged = mergeIntervals(intervals);
  console.log(merged); // Output: [[2, 9]]
  