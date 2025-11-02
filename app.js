var carInput = document.querySelector(".carName");
var modelInput = document.querySelector(".modelYear");
var priceInput = document.querySelector(".price");
var colorInput = document.querySelector(".color");
var addressInput = document.querySelector(".address");
var statusInput = document.querySelector(".status");
var box2 = document.querySelector(".box2");

var cars = [
  {
    name: "Suzuki Alto",
    model: "2023",
    price: "2450000",
    color: "White",
    address: "Defence",
    status: "Available",
  },
  {
    name: "Toyota Corolla GLi",
    model: "2021",
    price: "4200000",
    color: "Silver",
    address: "Clifton",
    status: "Sold",
  },
  {
    name: "Honda City Aspire",
    model: "2022",
    price: "4600000",
    color: "Black",
    address: "DHA",
    status: "Available",
  },
  {
    name: "Suzuki Cultus VXR",
    model: "2020",
    price: "2900000",
    color: "Grey",
    address: "Bahria Town",
    status: "Booked",
  },
  {
    name: "Kia Sportage AWD",
    model: "2023",
    price: "7800000",
    color: "Red",
    address: "Defence",
    status: "Available",
  },
  {
    name: "Hyundai Tucson",
    model: "2022",
    price: "8500000",
    color: "White",
    address: "Clifton",
    status: "Sold",
  },
  {
    name: "Honda Civic Oriel",
    model: "2023",
    price: "9100000",
    color: "Black",
    address: "DHA",
    status: "Available",
  },
  {
    name: "Suzuki Wagon R VXL",
    model: "2021",
    price: "3150000",
    color: "Silver",
    address: "Bahria Town",
    status: "Available",
  },
  {
    name: "Toyota Yaris ATIV",
    model: "2022",
    price: "4300000",
    color: "Blue",
    address: "Defence",
    status: "Booked",
  },
  {
    name: "Prince Pearl",
    model: "2021",
    price: "1800000",
    color: "White",
    address: "Zamzama",
    status: "Available",
  },
  {
    name: "Changan Alsvin Lumiere",
    model: "2023",
    price: "4200000",
    color: "Grey",
    address: "Clifton",
    status: "Sold",
  },
  {
    name: "MG HS",
    model: "2022",
    price: "8800000",
    color: "Red",
    address: "DHA",
    status: "Available",
  },
  {
    name: "Suzuki Swift GLX CVT",
    model: "2023",
    price: "4800000",
    color: "Blue",
    address: "Defence",
    status: "Available",
  },
  {
    name: "Toyota Fortuner Sigma 4",
    model: "2023",
    price: "15700000",
    color: "White",
    address: "Clifton",
    status: "Booked",
  },
  {
    name: "Honda BR-V i-VTEC",
    model: "2021",
    price: "6000000",
    color: "Silver",
    address: "DHA",
    status: "Available",
  },
  {
    name: "Suzuki Bolan",
    model: "2022",
    price: "1950000",
    color: "White",
    address: "Bahria Town",
    status: "Available",
  },
  {
    name: "Toyota Hilux Revo",
    model: "2023",
    price: "11200000",
    color: "Black",
    address: "Defence",
    status: "Sold",
  },
  {
    name: "Honda Accord",
    model: "2021",
    price: "16500000",
    color: "White",
    address: "Clifton",
    status: "Available",
  },
  {
    name: "Suzuki Jimny",
    model: "2022",
    price: "6200000",
    color: "Green",
    address: "DHA",
    status: "Available",
  },
  {
    name: "Hyundai Elantra",
    model: "2023",
    price: "6500000",
    color: "Grey",
    address: "Defence",
    status: "Available",
  },
];

function addCar() {
  var carName = carInput.value;
  var modelYear = modelInput.value;
  var price = priceInput.value;
  var color = colorInput.value;
  var address = addressInput.value;
  var status = statusInput.value;
  if (
    carName === "" ||
    modelYear === "" ||
    price === "" ||
    color === "Choose..." ||
    address === "Choose..." ||
    status === "Choose..."
  ) {
    alert("Please fill all fields correctly!");
    return;
  }
  var carObj = {
    name: carName,
    model: modelYear,
    price: price,
    color: color,
    address: address,
    status: status,
  };
  cars.unshift(carObj);
  box2.innerHTML += `
 <div class="card card1" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${carName}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Model Year:</b> ${modelYear}</li>
    <li class="list-group-item"><b>Price:</b> ${price} PKR</li>
    <li class="list-group-item"><b>Color:</b> ${color}</li>
    <li class="list-group-item"><b>Address:</b> ${address}</li>
    <li class="list-group-item"><b>Status:</b> ${status}</li>
  </ul>
  <div class="d-grid gap-2 col-12 mx-auto mt-3">
    <button onclick="deleteValue(this)" type="button" class="btn btn-danger">Delete</button>
  </div>
</div>
`;
  carInput.value = "";
  modelInput.value = "";
  priceInput.value = "";
  colorInput.value = "Choose...";
  addressInput.value = "Choose...";
  statusInput.value = "Choose...";
}

function deleteValue(btn) {
  btn.parentNode.parentNode.remove();
}

function showAllCars() {
  box2.innerHTML = "";
  for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    box2.innerHTML += `
      <div class="card card1" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${car.name}</h5>
        </div>
        <ul class="list-group list-group-flush ">
          <li class="list-group-item"><b>Model Year:</b> ${car.model}</li>
          <li class="list-group-item"><b>Price:</b> ${car.price} PKR</li>
          <li class="list-group-item"><b>Color:</b> ${car.color}</li>
          <li class="list-group-item"><b>Address:</b> ${car.address}</li>
          <li class="list-group-item"><b>Status:</b> ${car.status}</li>
        </ul>
        <div class="d-grid gap-2 col-12 mx-auto mt-3">
          <button onclick="deleteValue(this)" type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    `;
  }
}
function clearAll() {
  box2.innerHTML = "";
}
