const libraryInventory = [
  { bookCode: "B01", title: "Lập trình C cơ bản", category: "IT", price: 150000, totalCopies: 5, availableCopies: 5, shelfLocation: "Kệ A1" },
  { bookCode: "B02", title: "Cấu trúc dữ liệu", category: "IT", price: 200000, totalCopies: 3, availableCopies: 3, shelfLocation: "Kệ A2" },
  { bookCode: "B03", title: "Đại số tuyến tính", category: "Toán", price: 120000, totalCopies: 4, availableCopies: 4, shelfLocation: "Kệ B1" }
];

console.log("--- DANH MỤC SÁCH BAN ĐẦU ---");
console.table(libraryInventory);

const newBook = { 
  bookCode: "B04", 
  title: "Javascript nâng cao", 
  category: "IT", 
  price: 250000, 
  totalCopies: 10, 
  availableCopies: 10, 
  shelfLocation: "Kệ A3" 
};
libraryInventory.push(newBook);

console.log("--- DANH MỤC SAU KHI NHẬP KHO B04 ---");
console.table(libraryInventory);

for (let i = 0; i < libraryInventory.length; i++) {
  if (libraryInventory[i].bookCode === "B01") {
    if (libraryInventory[i].availableCopies > 0) {
      libraryInventory[i].availableCopies -= 1;
      if (libraryInventory[i].availableCopies === 0) {
         console.log(`Thông báo: Sách ${libraryInventory[i].title} (B01) - HẾT SÁCH TRÊN KỆ`);
      }
    } else {
      console.log(`Thông báo: Sách ${libraryInventory[i].title} (B01) - HẾT SÁCH TRÊN KỆ`);
    }
    break;
  }
}

console.log("--- DANH MỤC SAU KHI XUẤT MƯỢN SÁCH B01 ---");
console.table(libraryInventory);

let indexToDelete = -1;
for (let i = 0; i < libraryInventory.length; i++) {
  if (libraryInventory[i].bookCode === "B03") {
    indexToDelete = i;
    break;
  }
}

if (indexToDelete !== -1) {
  libraryInventory.splice(indexToDelete, 1);
}

console.log("--- DANH MỤC SAU KHI THANH LÝ SÁCH HỎNG B03 ---");
console.table(libraryInventory);

let totalBooks = 0;
let totalAssetValue = 0;

for (let i = 0; i < libraryInventory.length; i++) {
  totalBooks += libraryInventory[i].totalCopies;
  totalAssetValue += (libraryInventory[i].totalCopies * libraryInventory[i].price);
}

console.log("==================================================");
console.log("             BÁO CÁO KIỂM KÊ KHO SÁCH             ");
console.log("==================================================");
console.log(`Tổng số lượng sách trong thư viện : ${totalBooks} cuốn`);
console.log(`Tổng giá trị tài sản sách         : ${totalAssetValue.toLocaleString("vi-VN")} VNĐ`);
console.log("==================================================");
