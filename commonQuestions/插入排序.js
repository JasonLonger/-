✨插入排序（Insertion Sort）是一种简单直观的排序算法，它的基本思想是将待排序的数据分成已排序和未排序两部分;
每次将未排序的部分中的最小（或最大）元素插入到已排序部分的适当位置，直到未排序部分为空，排序完成。

实际中我们玩扑克牌时，就用了插入排序的思想


✨代码
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i] // 抽牌
    let j = i - 1
    
    while(j >= 0 && arr[j] > current) { // 找牌，没找到大于抽牌的时间，就往后挪，直到发现前面牌大于抽牌，或者没牌了
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current // 将抽牌插入
  }
  return arr
}

在这个实现中，我们首先遍历整个数组，将每个元素存储在 current 变量中。然后，我们从 i-1 开始向前遍历数组，并将当前元素存储在 j 变量中。
在内部循环中，我们将 arr[j] 与 current 进行比较，如果 arr[j] 大于 current，则将 arr[j] 向右移动一个位置，并将 j 的值减 1。这样，我们就可以将 current 插入到正确的位置。
最后，我们将 current 插入到 arr[j+1] 的位置，即将已排序部分的末尾插入到未排序部分的开头。

✨时间复杂度：O(n^2) 空间复杂度:O(1)

✨总结：用打扑克方式理解就好
