
function copyText(txt) {
  const textToCopy = "This is the text you want to copy.";
  navigator.clipboard.writeText(txt).then(() => {
    alert("Text copied to clipboard!");
    document.querySelector(".alert").style.display = "block";
  }).catch(err => {
    alert("Failed to copy text: " + err);
  });
}

function maskPassword(pass) {
  let str = "";
  for (let index = 0; index < pass.length; index++) {
    str += "*";
  }
  return str;
}

const deletePassword = (website) => {
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e) =>{
        return e.website != website;
    });
    localStorage.setItem("passwords", JSON.stringify(arrUpdated));
    alert(`Successfully deleted ${website}'s password`);
    showPasswords();
}

const showPasswords = () => {
let tb = document.querySelector("table");
let data = localStorage.getItem("passwords");
if (data === null || JSON.parse(data).length == 0) {
  tb.innerHTML = "No data to show";
} else {
    tb.innerHTML = `<tr>
          <th>Website</th>
          <th>UserName</th>
          <th>Passwords</th>
          <th>Actions</th>
        </tr>`;
  let arr = JSON.parse(data);
  let str = "";
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

str += `<tr>
          <td>${element.website} <img onclick="copyText('${element.website}')" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M19%2021H7a2%202%200%2001-2-2V5a2%202%200%2001%202-2h8a2%202%200%2001%202%202v14a2%202%200%2001-2%202z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M13%202h4a2%202%200%2001%202%202v4h-6V2z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="Copy Icon"/>
</td>
          <td>${element.username} <img onclick="copyText('${element.username}')" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M19%2021H7a2%202%200%2001-2-2V5a2%202%200%2001%202-2h8a2%202%200%2001%202%202v14a2%202%200%2001-2%202z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M13%202h4a2%202%200%2001%202%202v4h-6V2z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="Copy Icon"/>
</td>
          <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M19%2021H7a2%202%200%2001-2-2V5a2%202%200%2001%202-2h8a2%202%200%2001%202%202v14a2%202%200%2001-2%202z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M13%202h4a2%202%200%2001%202%202v4h-6V2z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="Copy Icon"/>
</td>
          <td><button class = "btn-sn" id = "${element.website}" onclick="deletePassword('${element.website}')">Delete</button></td>
        </tr>`;
    }
    tb.innerHTML = tb.innerHTML + str;
}
website.value = "";
username.value = "";
password.value = "";
}

console.log("Working........!!");
showPasswords();
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  let passwords = localStorage.getItem("passwords");
  if (passwords == null) {
    let json = [];
    json.push({ username: username.value, password: password.value, website: website.value });
    alert("Password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({ website: website.value, username: username.value, password: password.value });
    alert("Password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  }
  showPasswords();
});
