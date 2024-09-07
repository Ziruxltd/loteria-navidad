<template>
  <HeaderComponent />
  <div>
    <span
      ><b>Cupones: {{ lotteryTickets.length }}</b></span
    >
    <button @click="handleAddTicket">+</button>
  </div>
  <div v-for="(ticket, idx) in lotteryTickets" :key="idx">
    <input
      class="ticket-input"
      v-for="(digit, digitIndex) in lotteries[0].digits"
      type="number"
      :value="ticket[digitIndex]"
      @input="handleTicketInput($event, idx, digitIndex)"
    />
    <button class="delete" @click="handleDelete(idx)">Delete</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import { lotteries } from "./assets/data.js";

const lotteryTickets = ref([]);

onMounted(() => {
  lotteryTickets.value = [generateTicket()];
});

function generateTicket() {
  let number = [];
  for (let i = 0; i < lotteries[0].digits; i++) {
    number.push(Math.floor(Math.random() * 10));
  }
  return number;
}

function handleAddTicket() {
  lotteryTickets.value.push(generateTicket());
}

function handleTicketInput(e, ticketIndex, digitIndex) {
  const event = e.target;
  const value = event.value.slice(-1);
  event.value = value;

  lotteryTickets.value[ticketIndex][digitIndex] = Number(value);

  const nextInput =
    event.nextElementSibling ||
    event.parentElement?.nextElementSibling?.children[0] ||
    null;
  if (nextInput) nextInput.focus();
}

function handleDelete(index) {
  if (lotteryTickets.value.length > 1) lotteryTickets.value.splice(index, 1);
}
</script>

<style scoped>
.ticket-input {
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  text-align: center;
  margin-right: 0.5rem;
  margin-top: 1rem;
}
.delete {
  margin-left: 1rem;
  background-color: rgb(244, 70, 70);
  color: white;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
