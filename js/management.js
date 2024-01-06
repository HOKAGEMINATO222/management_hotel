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
const displayMenu = $(".management-content-container.menu");

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

function ToMenu() {
    var sidebarElements = document.querySelectorAll(".management-container .management-sidebar-content .management-sidebar-list ul li");
    sidebarElements.forEach(function (element) {
      element.classList.remove("active");
    });
  
    displayPost.classList.remove("active");
    displayListRoom.classList.remove("active");
    displayListBookRoom.classList.remove("active");
    displayListStaff.classList.remove("active");
    displayAccount.classList.remove("active");
    displayMenu.classList.add("active");
    
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
    displayMenu.classList.remove("active");
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
    displayMenu.classList.remove("active");

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
    displayMenu.classList.remove("active");
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
    displayMenu.classList.remove("active");
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
    displayMenu.classList.remove("active");
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




//js cho bài viết

function showPostDetail(imageSrc, content) {
    
    var modal = document.createElement("div");
    modal.classList.add("post-detail-modal");

    
    var modalContent = document.createElement("div");
    modalContent.classList.add("post-detail-content");

    
    var modalImage = document.createElement("img");
    modalImage.src = imageSrc;
    modalContent.appendChild(modalImage);

    
    var modalText = document.createElement("p");
    modalText.textContent = content;
    modalContent.appendChild(modalText);

    var closeModalButton = document.createElement("span");
    closeModalButton.classList.add("close-modal");
    closeModalButton.innerHTML = "&times;";
    closeModalButton.addEventListener("click", function () {
        modal.remove();
    });
    modalContent.appendChild(closeModalButton);

    
    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.remove();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.remove();
        }
    });
    modalText.classList.add("red-text");
}



function deleteSelectedPosts() {
    var selectedPosts = document.querySelectorAll('.post-content.selected');
    if (selectedPosts.length === 0) {
        alert("Vui lòng chọn ít nhất một bài viết để xóa.");
        return;
    }

    var confirmDelete = confirm("Bạn có chắc chắn muốn xóa các bài viết đã chọn?");
    if (confirmDelete) {
        selectedPosts.forEach(post => post.remove());
    }
}

function togglePostSelection(event) {
    event.currentTarget.classList.toggle('selected');
}


var postContents = document.querySelectorAll('.post-content');
postContents.forEach(post => post.addEventListener('click', togglePostSelection));


function addNewPost() {
    var newPostContent = prompt('Nhập nội dung của bài viết mới:');
    if (!newPostContent) return;

    var newPostImage = prompt('Nhập URL hình ảnh của bài viết mới:');
    if (!newPostImage) return;

    var newPost = {
        content: newPostContent,
        image: newPostImage
    };

    displayNewPost(newPost);
    assignClickEvent();
}

function assignClickEvent() {
    var postContents = document.querySelectorAll('.post-content');
    postContents.forEach(post => post.addEventListener('click', togglePostSelection));
}
assignClickEvent(); 

function displayNewPost(post) {
    var postContainer = document.querySelector('.management-content-container.post');
    var newPostDiv = document.createElement('div');
    newPostDiv.classList.add('post-content', 'selected'); // Initially selected
    newPostDiv.innerHTML = `
        <img  onclick="showPostDetail('/${post.image}', '${post.content}')" class="img-post" src="/${post.image}" style="height: 200px; width: 35%; cursor: zoom-in;">
        <div class="post-content-list">
            <span class="post-content-list" style="width: 100%; text-align: center;">${post.content}</span>
            <div class="detail">
                <u style="width: 100px; height: 30px; color: #0076ff; border: none; border-radius: 4px; font-size: 20px;">Chi Tiết</u>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    `;


    newPostDiv.classList.add('post-content', 'selected');

    postContainer.appendChild(newPostDiv);
}






var data_staff = [];
// hàm thêm nhân viên
function inputStaff() {
    var staff_name = document.getElementById("staff-name").value;
    var staff_gender = document.getElementById("staff-gender").value;
    var staff_date = document.getElementById("staff-date").value;
    var staff_address = document.getElementById("staff-address").value;
    var staff_phone = document.getElementById("staff-phone").value;
    var staff_email = document.getElementById("staff-email").value;

   
    if (!staff_name || !staff_gender || !staff_date || !staff_phone || !staff_address || !staff_email) {
        alert("Vui lòng điền đầy đủ thông tin nhân viên");
        return;
    }

    var obj = {
        name: staff_name,
        gender: staff_gender,
        date: staff_date,
        address: staff_address,
        phone: staff_phone,
        email: staff_email
    };
  
    data_staff.push(obj);
    outputStaff();
    clear();
    addStaff.classList.remove("active");
}
// in bảng 
function outputStaff() {
    var table = `<tr>
    <th style="width: 5%">STT</th>
    <th style="width: 20%">Họ Tên</th>
    <th style="width: 10%">Giới Tính</th>
    <th style="width: 10%">Ngày Sinh</th>
    <th style="width: 15%">Địa Chỉ</th>
    <th style="width: 15%">Số Điện Thoại</th>
    <th style="width: 15%">Email</th>
    <th style="width: 10%">Active</th>
</tr>`;

    for (let i = 0; i < data_staff.length; i++) {
        table += `<tr>
            <td>${i + 1}</td>
            <td>${data_staff[i].name}</td>
            <td>${data_staff[i].gender}</td>
            <td>${data_staff[i].date}</td>
            <td>${data_staff[i].address}</td>
            <td>${data_staff[i].phone}</td>
            <td>${data_staff[i].email}</td>
            <td>
                <button style="margin:5px" class="btn-add-staff" onclick="deleteStaff(${i})"><i class="fa-solid fa-trash"></i>Xóa </button>
                <button style="margin:5px" class="btn-add-staff" onclick="changeStaff(${i})"><i <i class="fa-solid fa-arrows-rotate"></i>Sửa </button>
            </td>
        </tr>`;
    }
    document.getElementById("aa").innerHTML = table;
}

function clear() {
    document.getElementById("staff-name").value = "";
    document.getElementById("staff-gender").value = "";
    document.getElementById("staff-date").value = "";
    document.getElementById("staff-address").value = "";
    document.getElementById("staff-phone").value = "";
    document.getElementById("staff-email").value = "";
}
// hàm xóa
function deleteStaff(index) {
    var confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhân viên này ?");
    if(confirmDelete){
        data_staff.splice(index, 1);
    }
    else{
        return 0;
    }

    outputStaff();
}
// hàm chỉnh sửa
function changeStaff(index){
    addStaff.classList.add("active");
    for(let i = 0; i < data_staff.length; i++){
        if(index == i){
            document.getElementById("staff-name").value = data_staff[index].name;
            document.getElementById("staff-gender").value = data_staff[index].gender;
            document.getElementById("staff-date").value = data_staff[index].date;
            document.getElementById("staff-address").value = data_staff[index].position;
            document.getElementById("staff-phone").value = data_staff[index].position;
            document.getElementById("staff-email").value = data_staff[index].position;
        }
    }
    data_staff.splice(index, 1);
    outputStaff();
    
}






/*Hàm Thêm Phòng*/
document.addEventListener("DOMContentLoaded", function () {
    const addRoomContainer = document.querySelector(".add-room-container");

    const roomsData = [
        {
            stt: 1,
            name: "Phòng 101",
            image: "../../assets/image/nền.jpeg",
            type: "Phòng hạng sang",
            description: "Phòng được bài trí theo phong cách hiện đại, có thể được đặt cho hai người cũng như cho một người.",
            price: "1.000.000 VND",
            status: "Đã đặt"
        }
    ];

    showRooms();

    document.querySelector(".btn-submit").addEventListener("click", function () {
        AddRoom();
    });

    document.querySelectorAll(".btn-delete-room").forEach((button, index) => {
        button.addEventListener("click", function () {
            handleDeleteRoom(index);
        });
    });

    function showRooms() {
        const table = document.querySelector(".rooms table");
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }
    
        roomsData.forEach(function (room, index) {
            const row = table.insertRow(-1);
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${room.name}</td>
                <td>
                    <div class="room-image" style="background: url('${room.image}') center /cover no-repeat;"></div>
                </td>
                <td style="text-align: left">
                    <ul>
                        <li><b>Loại phòng: </b>${room.type}</li>
                        <li><b>Mô tả: </b>${room.description}</li>
                        <li><b>Giá: </b>${room.price}</li>
                    </ul>
                </td>
                <td>${room.status}</td>
                <td>
                    <button class="btn-edit-room" onclick="handleEditRoom(${index})">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btn-delete-room" onclick="handleDeleteRoom(${index})">
                            <i class="fa-solid fa-trash"></i>
                    </button>
                </td>`;
    
            // Thêm sự kiện click vào nút "Xóa" cho mỗi phòng
            const deleteButton = row.querySelector(".btn-delete-room");
            deleteButton.addEventListener("click", function () {
                handleDeleteRoom(index);
            });
        });
    }
    
    
    
    function AddRoom() {
        const roomName = document.getElementById("room-name").value;
        const roomImage = document.getElementById("room-image").value;
        const roomType = document.getElementById("room-type").value;
        const roomDescription = document.getElementById("room-description").value;
        const roomPrice = document.getElementById("room-price").value;

        if (!roomName || !roomImage || !roomType || !roomDescription || !roomPrice) {
            alert("Vui lòng điền đầy đủ thông tin phòng");
            return;
        }

        const newRoom = {
            stt: roomsData.length + 1,
            name: roomName,
            image: roomImage,
            type: roomType,
            description: roomDescription,
            price: roomPrice,
            status: "Trống"
        };

        roomsData.push(newRoom);
        showRooms();
        addRoomContainer.classList.remove("active");
    }

    function handleDeleteRoom(index) {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa phòng này?");
        if (confirmDelete) {
            roomsData.splice(index, 1);
            // Cập nhật lại STT
            roomsData.forEach((room, i) => {
                room.stt = i + 1;
            });
            showRooms();
        }
    }
    
});


document.querySelector('.fa-solid.fa-caret-down').addEventListener('click', function() {
    document.querySelector('.admin-info').classList.add('active');
});

document.addEventListener('click', function(event) {
    var adminInfo = document.querySelector('.admin-info');
    if (!event.target.closest('.admin-info') && !event.target.closest('.fa-solid.fa-caret-down')) {
        adminInfo.classList.remove('active');
    }
});



// JavaScript để cập nhật width theo kích thước của .management-sidebar
function updateSidebarWidth() {
    const managementSide = document.querySelector('.management-side');
    const managementSidebar = document.querySelector('.management-container .management-sidebar');
  
    if (managementSidebar) {
      const sidebarWidth = managementSidebar.offsetWidth;
      managementSide.style.width = `calc(100% - ${sidebarWidth}px)`;
    }
  }
  
  // Gọi hàm khi trang được tải và khi kích thước của trình duyệt thay đổi
  window.onload = window.onresize = updateSidebarWidth;
  