document.addEventListener('DOMContentLoaded', function() {
    // Xử lý khi form tìm kiếm được gửi đi
    const searchForm = document.querySelector('.search-container form');
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const searchTerm = this.querySelector('input[name="search"]').value;
      // Xử lý tìm kiếm, ví dụ: chuyển hướng đến trang kết quả tìm kiếm
      // window.location.href = '/search?query=' + searchTerm;
      console.log('Từ khóa tìm kiếm:', searchTerm);
    });
  
    // Xử lý khi nút "Tìm hiểu ngay" được nhấn
    const learnMoreBtn = document.getElementById('btn1').querySelector('button');
    learnMoreBtn.addEventListener('click', function() {
      // Xử lý hành động khi nhấn "Tìm hiểu ngay", ví dụ: chuyển hướng đến trang chi tiết sản phẩm
      // window.location.href = '/product-details';
      console.log('Đã nhấn Tìm hiểu ngay');
    });
  
    // Xử lý khi nút "Đặt ngay" được nhấn
    const orderNowBtn = document.getElementById('btn2').querySelector('button');
    orderNowBtn.addEventListener('click', function() {
      // Xử lý hành động khi nhấn "Đặt ngay", ví dụ: chuyển hướng đến trang đặt hàng
      // window.location.href = '/order';
      console.log('Đã nhấn Đặt ngay');
    });
  });