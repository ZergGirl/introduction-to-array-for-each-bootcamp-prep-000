function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 199).toString() + "!!!"
}
function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
