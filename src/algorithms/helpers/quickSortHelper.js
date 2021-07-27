export function choosePivot(array, start, end) {
    // randomly pick an element between start and end;
    return Math.floor(Math.random() * (end - start)) + start;
  }