const size = 15;
for (let i = 1; i <= size; i ++) {
    
    document.write(`<button onclick = "myFunction(${i})"
    >button ${i}  </button>`)
   
// ======tham số vào onclick, chỉ dùng 1 lần `` vào nối chuỗi
}
// number là đối số của hàm myFunction
function myFunction(number) {
    alert(`Button ${number}`);
}
