// Khai báo một đối tượng với các cặp key-value
const themeColors = {
    darkGreen: '#347928',
    mintGreen: '#C0EBA6',
    offWhite: '#FFFBE6',
    gold: '#FCCD2A'
};

// Hoặc đặt tên theo công dụng
const appTheme = {
    primary: '#347928', // Màu chính
    secondary: '#C0EBA6', // Màu phụ
    background: '#FFFBE6', // Màu nền
    accent: '#FCCD2A'  // Màu nhấn
};

// Cách truy cập một màu cụ thể bằng tên
console.log(appTheme.primary);    // In ra: '#347928'
console.log(appTheme.background); // In ra: '#FFFBE6'