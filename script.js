const compliments = [" ", "An tâm", "An toàn", "An yên", "Ảo tung chảo", "Âm thầm", "Ấm áp", "Ấm no", "Ầm ĩ", "Ân cần", 
  "Bác ái", "Ba phải", "Bánh bèo", "Bác học", "Bạo dạn", "Bao dung", "Bền bỉ", "Bí ẩn", "Bình thường", "Bướng bỉnh", "Béoooo", "Ba chấm...",
  "Cảm thông", "Cẩn thận", "Chăm chỉ", "Cool", "Cute", "Cà chớn", "Cao sang", "Cao quý", "Cần cù", "Cáu bẩn", "Chung thủy",
  "Danh dự", "Dám làm", "Dấn thân", "Dễ thương", "Dễ nuôi", "Dễ tính", "Dí dỏm", "Dũng cảm", "Dở hơi", "Dứt khoát", "Dửng mỡ",
  "Đồng cảm", "Đanh đá", "Điệu đà", "Đào hoa", "Đa tài", "Đẹp từ trong ra ngoài", "Đủng đỉnh", "Độc lập", 
  "Em đẹp", "Em xinh", "E thẹn", "E ấp", "Em vui là được", "Em là nhất", 
  "Êm ấm", "Êm đềm", "Êm thấm", "Êm ái", 
  "Funny", "Giỏi", "Giống Lee Min-ho", "Gan lì", "Gan dạ", "Giang hồ", "Gầy làm thầy thiên hạ", 
  "Học giỏi", "Hạnh phúc", "Hài hước", "Hớn hở", "Hahaha", "Hài lòng", "Hiền lành", "Hiếu thảo", "Hào quang rực rỡ",
  "I am number one",  "Intelligent", "Interesting", "Ít nói", "Joyful", "Just", 
  "Khiêm tốn", "Kín đáo", "Kiêu kỳ", "Khó chiều", "Khó tính", "Kiên định", "Kiên trì", "Không sợ chó", 
  "Lấm lánh ánh sao", "Lãng mạn", "Lovely", "Lung linh", "Lòng lợn", "Lắm chuyện", 
  "Mơ mộng", "Mặt mẹt", "Mong manh", "Mạnh mẽ", "Muốn gì được nấy",
  "Nhõng nhẽo", "Nhung nhớ", "Nhiều tiền", "Não cá vàng", "Nhã nhặn", "Nhỏ nhẹ", "Nhu mì", "Nồng nàn", "Ngay thẳng", 
  "Oai phong", "Oai vệ", "Oai hùng", "Ô dề", "Ông trời", "Ơn nghĩa", "Ơn đức", "Ơn này ngày sau báo đáp", "Ơn giời...",
  "Phải đạo", "Phân minh", "Phong lưu", "Phong phú", "Phồn vinh", "Phúc đức", "Phúc hậu", 
  "Quả cảm", "Quá trời quá đất", "Quan trọng", "Quý phái", "Quyền quý", "Quyến rũ",
  "Rạch ròi", "Rạng rỡ", "Rất giàu", "Rực rỡ", "Sài sang", "Sung sướng", "Sung túc", "Sang trọng", "Sắc sảo", 
  "Tài đức vẹn toàn", "Tài tình", "Trách nhiệm", "Tử tế", "Tinh tế", "Tốt", "Thanh cao", "Thanh tao", "Trung thực", "Thật thà", "Thông minh", 
  "Ung dung", "Ủy mị", "Uyên bác", "U uôi, xinh thế :)", "U là trời", "Uy nghi", "Ương ngạnh", "Ưu tư", "Ưu tú", "Ưa nhìn", 
  "Vạn sự như ý", "Vang danh", "Văn vẻ", "Vi diệu", "Vĩ đại", "Vĩnh cửu", "Very good", "Vô tư", "Vui vẻ", "Vui tươi", "Vững chãi", 
  "Yêu đời", "Yêu gia đình", "Yên ấm", "Yểu điệu", "Y chang người yêu em"];

const inputBox = document.getElementById("name");
const compBox = document.getElementById("compbox");

function processCompliments() {
    const nameArr = inputBox.value.split("");
    compBox.replaceChildren();
    nameArr.forEach(processLetter);
    inputBox.value = "";
}

function processLetter(value, index, array) {
    if (value == "ă") {value = "a"}
    if (value == "ị") {value = "i"}
    if (value == "ầ") {value = "â"}
    if (["ế", "ễ"].includes(value)) {value = "ê"}
    if (["õ", "ọ"].includes(value)) {value = "o"}
    if (["ũ", "ú"].includes(value)) {value = "u"}

    const letter = value.toUpperCase();
    
    // Only add something if the character is a letter
    // if (letter.match(/[a-z]/i)) {
        const validCompliments = [];
        for (let i = 0; i < compliments.length; i++) {
          
            if (compliments[i].startsWith(letter)) {
                validCompliments.push(compliments[i]);
            }
        }
        const compPara = document.createElement("p");
        compPara.innerText =
            validCompliments[
                Math.floor(Math.random() * validCompliments.length)
            ];
        compBox.appendChild(compPara);
    // }
}
