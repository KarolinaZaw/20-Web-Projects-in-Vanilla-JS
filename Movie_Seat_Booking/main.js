const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector(".count");
const total = document.querySelector(".total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;



//Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}



function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectedSeatsCount = selectedSeats.length;

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    //local storage
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));



    console.log(seatsIndex);
    count.innerText = selectedSeats.length;

    total.innerText = selectedSeatsCount * ticketPrice;
}

movieSelect.addEventListener("change", e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})



container.addEventListener("click", e => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");


        updateSelectedCount();
    }

})