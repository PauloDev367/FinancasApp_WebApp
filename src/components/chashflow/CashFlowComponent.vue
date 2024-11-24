<template>
  <main id="chashflow">
    <div class="container">
      <div class="row">
        <template v-for="entry in clientEntries" :key="entry.id">
            <div class="col-12">
              <div class="card-cashflow">
                <div class="head">
                  <template v-if="entry.entryType == 'EXPENSE'">
                    <i
                      :class="`${entry.expenseCategory.icon}`"
                      :style="{
                        'background-color': entry.expenseCategory.iconBg,
                        color: entry.expenseCategory.iconColor,
                      }"
                    ></i>
                    <div class="content">
                      <h3>{{ entry.title }}</h3>
                      <h4>
                        Conta inicial -
                        {{ formatDate(entry.expenseCategory.createdAt) }}
                      </h4>
                    </div>
                  </template>
                  <template v-else>
                    <i
                      :class="`${entry.incomeCategory.icon}`"
                      :style="{
                        'background-color': entry.incomeCategory.iconBg,
                        color: entry.incomeCategory.iconColor,
                      }"
                    ></i>
                    <div class="content">
                      <h3>{{ entry.title }}</h3>
                      <h4>
                        Conta inicial -
                        {{ formatDate(entry.incomeCategory.createdAt) }}
                      </h4>
                    </div>
                  </template>
                </div>
                <div class="price">
                  <template v-if="entry.entryType == 'EXPENSE'">
                    <h5 class="expense">- R$ {{ entry.price }}</h5>
                  </template>
                  <template v-else>
                    <h5 class="income">+ R$ {{ entry.price }}</h5>
                  </template>
                  <h6>
                    <span v-if="entry.payed == true">pago</span>
                    <span v-else>aguardando pagamento</span>
                  </h6>
                </div>
              </div>
            </div>
        </template>
      </div>
    </div>
  </main>
</template>


<script setup>
import { ref } from "vue";

const { clientEntries } = defineProps({
  clientEntries: {
    required: true,
  },
});


const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const formatDateToString = (dateString) => {
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const date = new Date(dateString);

  const day = date.getDate();
  const month = months[date.getMonth()];

  const finalDate = `${day} de ${month}`;
  return finalDate;
};
</script>


<style scoped>
#chashflow {
  background-color: var(--bg-blue);
  padding-top: 40px;
  margin-bottom: 40px;
}

#chashflow h2 {
  color: #fff;
  font-size: 1rem;
}
#chashflow .card-cashflow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  background-color: var(--bg-rgba-blue);
  padding: 10px 20px;
  border-radius: 5px;
}
#chashflow .card-cashflow .head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#chashflow .card-cashflow .head i {
  font-size: 1.3rem;
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#chashflow .card-cashflow .head .content {
  color: #fff;
  margin-left: 10px;
}
#chashflow .card-cashflow .head .content h3 {
  font-size: 1.1rem;
  margin-bottom: 0;
}
#chashflow .card-cashflow .head .content h4 {
  font-size: 0.9rem;
  margin-bottom: 0;
  font-weight: 400;
}
#chashflow .card-cashflow .price {
  text-align: right;
  font-weight: 400;
}
#chashflow .card-cashflow h5 {
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
}
#chashflow .card-cashflow h5.expense {
  color: var(--lightness-red);
}
#chashflow .card-cashflow h5.income {
  color: var(--lightness-green);
}
#chashflow .card-cashflow h6 {
  font-size: 0.9rem;
  font-weight: 400;
  color: #fff;
}
</style>