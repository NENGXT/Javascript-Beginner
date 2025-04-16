'use strict';

const bookings = [];
const createBooking = function (fightNum, numPassengers, price) {
  const booking = {
    fightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
  console.log(bookings);
};

createBooking('LA224', 2, 200);
