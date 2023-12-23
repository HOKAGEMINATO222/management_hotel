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
        <img onclick="showPostDetail('/${post.image}', '${post.content}')" class="img-post" src="/${post.image}" style="height: 200px; width: 35%;">
        <div class="post-content-list">
            <span class="post-content-list" style="width: 100%; text-align: center;">${post.content}</span>
            <div class="detail">
                <u style="width: 100px; height: 30px; color: #0076ff; border: none; border-radius: 4px; font-size: 20px;">Chi Tiết</u>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    `;

    // Add the same style classes as the existing posts
    newPostDiv.classList.add('post-content', 'selected');

    postContainer.appendChild(newPostDiv);
}





/* hàm thêm nhân viên*/
var data_staff = [];
// hàm thêm nhân viên
function inputStaff() {
    var staff_name = document.getElementById("staff-name").value;
    var staff_gender = document.getElementById("staff-gender").value;
    var staff_date = document.getElementById("staff-date").value;
    var staff_position = document.getElementById("staff-position").value;

   
    if (!staff_name || !staff_gender || !staff_date || !staff_position) {
        alert("Vui lòng điền đầy đủ thông tin phòng");
        return;
    }

    var obj = {
        name: staff_name,
        gender: staff_gender,
        date: staff_date,
        position: staff_position,
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
// hàm xóa
function deleteStaff(index) {
    var confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhân viên này ?");
    data_staff.splice(index, 1);
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
            document.getElementById("staff-position").value = data_staff[index].position;
        }
    }
    deleteStaff(index)
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
                <td>${room.stt}</td>
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
            showRooms();
        }
    }
});
