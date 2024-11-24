<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card-entry">
          <h3>Titulo</h3>
          <div class="content">
            <i class="fa-solid fa-pencil"></i>
            <input type="text" placeholder="Adicione o titulo" />
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
              Nome da categoria
            </button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card-entry">
          <h3>Data</h3>
          <div class="content">
            <i class="fa-solid fa-calendar-days"></i>
            <input type="date" id="date-input" />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card-entry">
          <h3>Observações</h3>
          <div class="content">
            <i class="fa-regular fa-comments"></i>
            <input type="text" placeholder="Adicione alguma observação" />
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
              Selecione a conta do banco
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3">
        <button class="btn-outline-submit">Enviar</button>
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
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-cancel"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" class="btn btn-sm btn-select">
            Selecionar
          </button>
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
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-cancel"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" class="btn btn-sm btn-select">
            Selecionar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

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

onMounted(() => {
  setTodayDate();
});
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
  -webkit-appearance: none;
  margin: 0;
}
.card-entry input:focus {
  outline: none;
  border: none;
}
</style>