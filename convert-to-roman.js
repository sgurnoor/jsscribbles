function convertToRoman() {
 var num = document.getElementById("num").value;
 var ans = "";
 var numCheck = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 var romanCheck = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
 for(var i = 0; i < numCheck.length; i++) {
   while ((num - numCheck[i]) >= 0) {
   ans += romanCheck[i];
   num -= numCheck[i];
   }
 }
  document.getElementById("ans").innerHTML = ans;
  return false;
}
