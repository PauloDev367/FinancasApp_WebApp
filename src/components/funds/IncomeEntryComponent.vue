<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card-entry">
          <h3>Titulo</h3>
          <div class="content">
            <i class="fa-solid fa-pencil"></i>
            <input
              type="text"
              v-model="formData.title"
              placeholder="Adicione o titulo"
            />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card-entry">
          <h3>Categoria</h3>
          <div class="content">
            <i class="fa-solid fa-filter"></i>
            <button
              type="button"
              data-toggle="modal"
              class="btn-select-opt"
              data-target="#modalSelectCategory"
            >
              <span v-if="formData.category != null">
                {{ formData.category.name }}
              </span>

              <span v-else> Nome da categoria </span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card-entry">
          <h3>Data</h3>
          <div class="content">
            <i class="fa-solid fa-calendar-days"></i>
            <input type="date" v-model="formData.date" id="date-input" />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card-entry">
          <h3>Observações</h3>
          <div class="content">
            <i class="fa-regular fa-comments"></i>
            <input
              type="text"
              v-model="formData.obs"
              placeholder="Adicione alguma observação"
            />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card-entry">
          <h3>Pago no conta:</h3>
          <div class="content">
            <i class="fa-solid fa-wallet"></i>
            <button
              type="button"
              data-toggle="modal"
              class="btn-select-opt"
              data-target="#modalSelectBankAccount"
            >
              <span v-if="formData.account != null">
                {{ formData.account.name }}
              </span>
              <span v-else> Selecione a conta do banco </span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3">
        <button class="btn-outline-submit" @click="createIncome">Enviar</button>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="modalSelectCategory"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalSelectCategoryTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalSelectCategoryTitle">
            Selecione a categoria
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" v-if="categories">
          <ul class="list-icons">
            <li v-for="category in categories.items" :key="category.id">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radioCategory"
                  :id="'radioCategory' + category.id"
                  :value="category"
                  v-model="formData.category"
                />
                <label
                  class="form-check-label"
                  :for="'radioCategory' + category.id"
                >
                  <i
                    :class="category.icon"
                    :style="{
                      'background-color': category.iconBg,
                      color: category.iconColor,
                    }"
                  ></i>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="modalSelectBankAccount"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalSelectBankAccountTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalSelectBankAccountTitle">
            Selecione a conta do banco
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" v-if="bankAccounts != null">
          <ul>
            <li v-for="bank in bankAccounts.items" :key="bank.id">
              <input
                class="form-check-input"
                type="radio"
                name="radioBankAccount"
                :id="'radioBankAccount' + bank.id"
                :value="bank"
                v-model="formData.account"
              />
              <label
                class="form-check-label"
                :for="'radioBankAccount' + bank.id"
              >
                {{ bank.name }}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getBankAccounts } from "@/services/bankaccount.js";
import { getCurrentInstance, onMounted, ref } from "vue";
import {
  createIncomeEntry,
  getAllIncomeCategories,
} from "./../../services/income.js";
const toastr = getCurrentInstance().appContext.config.globalProperties.$toastr;

const { value } = defineProps({
  value: { required: true },
});

function setTodayDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (mm < 10) mm = "0" + mm;
  if (dd < 10) dd = "0" + dd;

  const todayFormatted = yyyy + "-" + mm + "-" + dd;

  document.getElementById("date-input").value = todayFormatted;
}
const formData = ref({
  title: null,
  category: null,
  date: null,
  obs: null,
  account: null,
});
const page = ref(1);
const pageBankAccounts = ref(1);
const categories = ref(null);
const bankAccounts = ref(null);

onMounted(() => {
  setTodayDate();
  getcategories();
  getAllBankAccounts();
});
const emit = defineEmits(["incomeCreated"])

const createIncome = () => {
  const finalValue = parseFloat(value);
  if (finalValue <= 0 || finalValue == null) {
    toastr.error("É preciso informar o valor para continuar!");
    return;
  }

  if (
    formData.value.title == null ||
    formData.value.category == null ||
    formData.value.account == null
  ) {
    toastr.error(
      "É preciso informar o titulo, a categoria e a conta para continuar!"
    );
    return;
  }

  createIncomeEntry(
    finalValue,
    formData.value.category.id,
    formData.value.title,
    formData.value.account.id,
    formData.value.obs,
    formData.value.date
  )
    .then((result) => {
      toastr.success("Nova receita adicionada com sucesso!");
      formData.value.title= null;
      formData.value.category= null;
      formData.value.date= null;
      formData.value.obs= null;
      formData.value.account= null;
      emit("incomeCreated")
    })
    .catch((err) => {
      toastr.error("Erro ao adicionar nova receita!");
    });
};

const getcategories = () => {
  const perPage = 30;
  getAllIncomeCategories(page.value, perPage)
    .then((result) => {
      categories.value = result.data;
    })
    .catch((err) => {});
};
const getAllBankAccounts = () => {
  getBankAccounts(pageBankAccounts.value)
    .then((result) => {
      bankAccounts.value = result.data;
    })
    .catch((err) => {});
};
</script>

<style scoped>
.card-entry {
  color: #fff;
  border-bottom: 1px solid #fff;
  padding: 20px 0;
}

.card-entry h3 {
  font-size: 1.3rem;
  font-weight: bold;
}
.card-entry .content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.card-entry input {
  background-color: transparent;
  border: none;
  color: #fff;
  width: 100%;
  margin-left: 10px;
}

.card-entry input:focus::placeholder,
.card-entry input::placeholder {
  color: #fff;
}
.card-entry input[type="number"]::-webkit-inner-spin-button,
.card-entry input[type="number"]::-webkit-outer-spin-button {
  /* margin-left: 20px; */
  -webkit-appearance: none;
  margin: 0;
}
.card-entry input:focus {
  outline: none;
  border: none;
}
.list-icons {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-content: center;
}
.list-icons li {
  margin-right: 10px;
  margin-bottom: 10px;
}
.list-icons li i {
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 50%;
}
</style>