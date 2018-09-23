class Sorter {
  constructor() {
    this.array = [];
    this.defaultSort = (a,b) => a - b;
    this.sorterFunction = this.defaultSort;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array.slice();
  }

  sort(indices) {
    var finalArray =[];
    indices.sort(this.defaultSortFunction);

    for (var i = 0; i < indices.length; i++){
      if (indices[i] >= 0 && indices[i] < this.array.length){
        finalArray.push(this.array[ indices[i] ]);
      }
    }
    var finalArrayLength = finalArray.length;
    finalArray.sort(this.sorterFunction);

    for (var i=0; i < finalArrayLength; i++){
      this.array[ indices[i] ] = finalArray.shift();
    }
  }

  setComparator(sorterFunction) {
    if (sorterFunction != null){
      this.sorterFunction = sorterFunction;
    } else{
      this.sorterFunction = this.DefSort;
    }
  }
}

module.exports = Sorter;