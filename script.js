let selectedGraphic = ''; // ตั้งค่าเป็นค่าว่างไว้เพื่อเช็คการเลือกกระทง

function selectGraphic(graphic) {
    selectedGraphic = graphic; // กำหนดภาพกระทงที่เลือก
    document.getElementById('selectedGraphic').src = selectedGraphic; // ตั้งค่า src ของภาพทันที
    alert('คุณเลือกกระทงแบบที่ ' + graphic);
}

function launchKrathong() {
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('messageInput').value;

    if (name && message && selectedGraphic) {  // ตรวจสอบให้มั่นใจว่ามีการเลือกกระทงแล้ว
        document.getElementById('selectedGraphic').src = selectedGraphic;  // แสดงภาพที่เลือก
        document.getElementById('displayName').innerText = name;
        document.getElementById('displayMessage').innerText = message;

        // แสดงกระทงลอย
        document.getElementById('krathong').classList.remove('hidden');
    } else if (!selectedGraphic) {
        alert('กรุณาเลือกกระทงก่อนลอยกระทง');
    } else {
        alert('กรุณาใส่ชื่อและคำอวยพรก่อนลอยกระทง');
    }
}