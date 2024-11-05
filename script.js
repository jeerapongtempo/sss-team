document.getElementById("float-button").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const wish = document.getElementById("wish").value;

    if (name && wish) {
        // ซ่อนฟอร์มกรอกข้อมูลและปุ่ม
        document.getElementById("form-container").style.display = "none";
        document.getElementById("float-button").style.display = "none"; // ซ่อนปุ่มลอยกระทง
        document.getElementById("floating-container").style.display = "block";

        document.getElementById("message").innerText = `ชื่อ: ${name} \nคำอวยพร: ${wish}`;
    } else {
        alert("กรุณากรอกชื่อและคำอวยพร");
    }
});