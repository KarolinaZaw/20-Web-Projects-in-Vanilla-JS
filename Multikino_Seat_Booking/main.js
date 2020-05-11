const container = document.querySelector(".container");
const seats = document.querySelectorAll(".seats:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice;

//Update total and count

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  const seatA = document.querySelectorAll(".seat.seat-A.selected");
  const seatVip = document.querySelectorAll(".seat.seat-vip.selected");

  const selectedSeatsCount = selectedSeats.length;
  const seatACount = seatA.length;
  const seatVipCount = seatVip.length;

  if (seatA.length !== 0 || seatVip.length !== 0) {
    ticketPrice =
      movieSelect.value * selectedSeatsCount +
      (seatACount * 0.4 + seatVipCount * 3);
  } else {
    ticketPrice = movieSelect.value * selectedSeatsCount;
  }

  total.innerHTML = ticketPrice;
  count.innerHTML = selectedSeatsCount;
}

// Lisenner for change film
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

//Function click

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateSelectedCount();
});
