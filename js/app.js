function binaryToDecimal(binary) {
  let toStr = binary.toString();
  let decimal = 0;
  for(let i = toStr.length - 1;i>=0;i--) {
    decimal += (toStr[i] * Math.pow(2,i));
  }
  return decimal;
}

$("#convert").on('click', () => {
  console.log($('#decimal'));
  let binary = $('#binary')[0].value;
  $('#decimal')[0].value = binaryToDecimal(binary);
})

 $('#binary').on('keypress', (e) => {
   if(e.which > 49 || e.which < 48) {
     alert('Please enter 1 or 0 only for binary');
   }
 })
