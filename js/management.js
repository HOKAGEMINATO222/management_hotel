const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const post = $(".management-sidebar-list .post");
const listRoom = $(".management-sidebar-list .list-room");
const listBookRoom = $(".management-sidebar-list .list-book-room");
const listStaff = $(".management-sidebar-list .list-staff");
const account = $(".management-sidebar-list .account");

const displayPost = $(".management-content-container.post");
const displayListRoom = $(".management-content-container.list-room");
const displayListBookRoom = $(".management-content-container.list-book-room");
const displayListStaff = $(".management-content-container.list-staff");
const displayAccount = $(".management-content-container.account");

const editRoomContainer = $(".edit-room-container");
const closeEditRoomContainer = $(".edit-room-container .icon-close");

const addRoomContainer = $(".add-room-container");
const closeAddRoomContainer = $(".add-room-container .icon-close");

const addStaff = $(".add-staff-container")
const handleAddStaff = () =>{
    addStaff.classList.add("active");
}

const closeAddStaff = $(".add-staff-container .icon-close");
closeAddStaff.onclick =()=>{
    addStaff.classList.remove("active")
}


const editStaff = $(".edit-staff-container");
const handleEditStaff =() =>{
    editStaff.classList.add("active");
}

const closeEditStaff = $(".edit-staff-container .icon-close");
closeEditStaff.onclick =() =>{
    editStaff.classList.remove("active");
}



post.onclick = () => {
    displayPost.classList.remove("active");
    displayListRoom.classList.remove("active");
    displayListBookRoom.classList.remove("active");
    displayListStaff.classList.remove("active");
    displayAccount.classList.remove("active");
    post.classList.remove("active");
    listRoom.classList.remove("active");
    listBookRoom.classList.remove("active");
    listStaff.classList.remove("active");
    account.classList.remove("active");
    displayPost.classList.add("active");
    post.classList.add("active");
};

listRoom.onclick =() => {
    displayPost.classList.remove("active");
    displayListRoom.classList.remove("active");
    displayListBookRoom.classList.remove("active");
    displayListStaff.classList.remove("active");
    displayAccount.classList.remove("active");
    post.classList.remove("active");
    listRoom.classList.remove("active");
    listBookRoom.classList.remove("active");
    listStaff.classList.remove("active");
    account.classList.remove("active");
    displayListRoom.classList.add("active");
    listRoom.classList.add("active");

};

listBookRoom.onclick =()=>{
    displayPost.classList.remove("active");
    displayListRoom.classList.remove("active");
    displayListBookRoom.classList.remove("active");
    displayListStaff.classList.remove("active");
    displayAccount.classList.remove("active");
    post.classList.remove("active");
    listRoom.classList.remove("active");
    listBookRoom.classList.remove("active");
    listStaff.classList.remove("active");
    account.classList.remove("active");
    displayListBookRoom.classList.add("active");
    listBookRoom.classList.add("active");
};

listStaff.onclick =()=>{
    displayPost.classList.remove("active");
    displayListRoom.classList.remove("active");
    displayListBookRoom.classList.remove("active");
    displayListStaff.classList.remove("active");
    displayAccount.classList.remove("active");
    post.classList.remove("active");
    listRoom.classList.remove("active");
    listBookRoom.classList.remove("active");
    listStaff.classList.remove("active");
    account.classList.remove("active");
    displayListStaff.classList.add("active");
    listStaff.classList.add("active");
};

account.onclick =()=>{
    displayPost.classList.remove("active");
    displayListRoom.classList.remove("active");
    displayListBookRoom.classList.remove("active");
    displayListStaff.classList.remove("active");
    displayAccount.classList.remove("active");
    post.classList.remove("active");
    listRoom.classList.remove("active");
    listBookRoom.classList.remove("active");
    listStaff.classList.remove("active");
    account.classList.remove("active");
    displayAccount.classList.add("active");
    account.classList.add("active");
};

const handleEditRoom = () => {
    editRoomContainer.classList.add("active");
};

const handleAddRoom = () => {
    addRoomContainer.classList.add("active");
};
  

const handleEditBookRoom = () => {
    editBookRoomContainer.classList.add("active");
};
  

closeEditRoomContainer.onclick = () => {
    editRoomContainer.classList.remove("active");
};

closeAddRoomContainer.onclick = () => {
    addRoomContainer.classList.remove("active");
};


function ToMainWebFuncion() {
    location.href("NMCNPM-main/index.html");
}




/* hàm thêm nhân viên*/
var data_staff = [];

function inputStaff() {
    var staff_name = document.getElementById("staff-name").value;
    var staff_gender = document.getElementById("staff-gender").value;
    var staff_date = document.getElementById("staff-date").value;
    var staff_position = document.getElementById("staff-position").value;

    var obj = {
        name: staff_name,
        gender: staff_gender,
        date: staff_date,
        position: staff_position,
    };

    
    let index = data_staff.findIndex((c) => c.name === obj.name);
            if (index >= 0) {
                // Nếu tên đã tồn tại, cập nhật thông tin
                data_staff[index] = obj;
            } else {
                // Nếu tên chưa tồn tại, thêm vào danh sách
                data_staff.push(obj);
            }
    outputStaff();
    clear();
    addStaff.classList.remove("active");
}

function outputStaff() {
    var table = `<tr>
        <th style="width: 5%">STT</th>
        <th style="width: 25%">Họ Tên</th>
        <th style="width: 15%">Giới Tính</th>
        <th style="width: 15%">Ngày Sinh</th>
        <th style="width: 20%">Chức vụ</th>
        <th style="width: 20%">Hoạt Động</th>
    </tr>`;

    for (let i = 0; i < data_staff.length; i++) {
        table += `<tr>
            <td>${i + 1}</td>
            <td>${data_staff[i].name}</td>
            <td>${data_staff[i].gender}</td>
            <td>${data_staff[i].date}</td>
            <td>${data_staff[i].position}</td>
            <td>
                <button class="btn-add-staff" onclick="deleteStaff(${i})"><i class="fa-solid fa-trash"></i>Xóa </button>
                <button class="btn-add-staff" onclick="changeStaff(${i})"><i <i class="fa-solid fa-arrows-rotate"></i>Sửa </button>
            </td>
        </tr>`;
    }
    document.getElementById("aa").innerHTML = table;
}

function clear() {
    document.getElementById("staff-name").value = "";
    document.getElementById("staff-gender").value = "";
    document.getElementById("staff-date").value = "";
    document.getElementById("staff-position").value = "";
}

function deleteStaff(index) {
    data_staff.splice(index, 1);
    outputStaff();
}

function changeStaff(index){
    addStaff.classList.add("active");
    for(let i = 0; i < data_staff.length; i++){
        if(index == i){
            document.getElementById("staff-name").value = data_staff[index].name;
            document.getElementById("staff-gender").value = data_staff[index].gender;
            document.getElementById("staff-date").value = data_staff[index].date;
            document.getElementById("staff-position").value = data_staff[index].position;
        }
    }
    deleteStaff(index)
    
}
    