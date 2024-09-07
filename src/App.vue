<template>
  <HeaderComponent />
  <div>
    <button v-if="!isSimulationRunning" class="start-button" @click="startStopSimulation">
      Empezar simulación
    </button>
    <button v-if="isSimulationRunning" class="stop-button" @click="startStopSimulation">
      Detener simulación
    </button>
  </div>
  <div>
    <span class="margin"><b>Décimos por número:</b></span>
    <select class="select-input margin" type="dropdown" v-model="tenth">
      <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
    </select>
    <span class="margin"
      ><b>Cupones: {{ lotteryTickets.length }}</b></span
    >
    <button class="margin" @click="handleAddTicket"><b>Añadir cupón</b></button>
    <span class="margin">
      <b>Coste total: {{ totalCost() }}€</b>
    </span>
  </div>
  <div v-for="(ticket, idx) in lotteryTickets" :key="idx">
    <input
      class="ticket-input"
      v-for="(digit, digitIndex) in DIGITS"
      type="number"
      :value="ticket[digitIndex]"
      @input="handleTicketInput($event, idx, digitIndex)"
    />
    <button class="delete" @click="handleDelete(idx)">Borrar</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import { lotteries } from "./assets/data.js";

const TICKET_PRICE = 20;
const DIGITS = 5;
const tenth = ref(1);
const lotteryTickets = ref([]);
const isSimulationRunning = ref(false);

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

function handleTenthInput(e) {
  const event = e.target;
  let value = event.value.slice(-1);
  value = Math.max(1, Math.min(10, Number(value)));
  event.value = value;
  tenth.value = value;
}

function totalCost() {
  return lotteryTickets.value.length * tenth.value * TICKET_PRICE;
}

function startStopSimulation() {
  isSimulationRunning.value = !isSimulationRunning.value;
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
.select-input {
  width: 3rem;
  height: 2rem;
  font-size: 1.5rem;
  text-align: center;
}
.delete {
  margin-left: 1rem;
  background-color: rgb(244, 72, 72);
  color: white;
}
.margin {
  margin: 0.5rem;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.start-button {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: rgb(0, 128, 0);
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.stop-button {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: rgb(244, 72, 72);
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
