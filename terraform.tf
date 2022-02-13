locals {
  numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  result = sum([for x in local.numList : 10 * x if x % 2 == 0])
}
