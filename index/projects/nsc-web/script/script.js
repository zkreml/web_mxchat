numberSystemConverter();
function numberSystemConverter() {
  let num = document.getElementById("number").value;
  let base = document.getElementById("base").value;
  let new_base = document.getElementById("new-base").value;

  base = parseInt(base);
  new_base = parseInt(new_base);

  try {
    let dec_num = parseInt(num, base);
    let new_num = dec_num.toString(new_base);

    document.getElementById("converted").value = new_num;
    console.log(`BASE ${base}: ${num} ==> BASE ${new_base}: ${new_num}`);
  } catch (RangeError) {
    console.log(`One or more bases is not in the range of 2 to 36.`);
  }
}
