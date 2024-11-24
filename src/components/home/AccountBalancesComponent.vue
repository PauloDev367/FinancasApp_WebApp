<template>
  <main class="acount-balances">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="area-general-infos">
            <div>
              <h3>Saldo geral</h3>
              <h2>
                {{
                  showBalance == true
                    ? formatBalance(mainAccount.balance)
                    : "---"
                }}
              </h2>
            </div>
            <i
              @click="changeShowBalanceStatus"
              class="show-balance fa-solid fa-eye-slash"
              v-if="showBalance"
            ></i>
            <i
              @click="changeShowBalanceStatus"
              class="show-balance fa-solid fa-eye"
              v-else
            ></i>
          </div>
        </div>

        <div class="col-12">
          <div class="my-accounts">
            <h3>Minhas contas</h3>
            <div>
              <div class="account">
                <div class="head">
                  <i class="fa-solid fa-wallet"></i>
                  <div class="content">
                    <h4>Conta principal</h4>
                    <h5>{{ mainAccount.name }}</h5>
                  </div>
                </div>
                <div class="body">
                  <h6>
                    {{
                      showBalance == true
                        ? formatBalance(mainAccount.balance)
                        : "---"
                    }}
                  </h6>
                </div>
              </div>
              <button data-toggle="modal" data-target="#modalBankAccounts">
                Mudar de conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <div
    class="modal fade"
    id="modalBankAccounts"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalBankAccountsTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalBankAccountsTitle">
            Contas bancárias
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
        <div class="modal-body">
          <ul class="p-0 list-unstyled m-0">
            <li
              v-for="account in bankAccounts"
              :key="account.id"
              class="list-account"
            >
              <div>
                <input
                  type="radio"
                  name="bankAccount"
                  :id="`${bankAccount}${account.id}`"
                  :value="account.id"
                  v-model="selectedBankAccount"
                />
                <label :for="`${bankAccount}${account.id}`">
                  <i class="fa-solid fa-wallet"></i>
                  {{ account.name }}
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button @click="changeBankAccount" class="btn btn-select w-100">
            <strong>ATUALIZAR</strong>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import toastr from "toastr";
import { onMounted, ref, toRaw, watch } from "vue";

const { bankAccounts } = defineProps({
  bankAccounts: { type: Array, required: true },
});
const showBalance = ref(true);
const mainAccount = ref({});
const allBankAccounts = ref({});
const selectedBankAccount = ref({});

onMounted(() => {
  const actualShowBalance = window.localStorage.getItem(
    "showBalance",
    showBalance
  );
  if (actualShowBalance != null) {
    if (actualShowBalance == "false") {
      showBalance.value = false;
    } else {
      showBalance.value = true;
    }
  }
  const rawBankAccounts = toRaw(bankAccounts);
  allBankAccounts.value = rawBankAccounts;
  getMainAccountData();
});

const getMainAccountData = () => {
  let mainAccountId = window.localStorage.getItem("main-account-id");

  if (mainAccountId == null) {
    mainAccountId = allBankAccounts.value[0].id;
    window.localStorage.setItem("main-account-id", mainAccountId);
  }

  let mainAccountSearch = allBankAccounts.value.find(
    (itm) => itm.id == mainAccountId
  );

  if (mainAccountSearch == null) {
    mainAccountSearch = allBankAccounts.value[0];
  }
  mainAccount.value = mainAccountSearch;
};

const changeShowBalanceStatus = () => {
  showBalance.value = !showBalance.value;
  window.localStorage.setItem("showBalance", showBalance.value);
};

const formatBalance = (balance) => {
  const formatoBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatoBRL.format(balance);
};

const changeBankAccount = () => {
  window.localStorage.setItem("main-account-id", selectedBankAccount.value);
  getMainAccountData();
  toastr.success("Conta bancária atualizada");
};
</script>



<style scoped>
.show-balance {
  cursor: pointer;
  font-size: 1.5rem;
}

.account {
  display: flex;
  justify-content: start;
  align-items: center;
  color: #fff;
}
.account i {
  width: 50px;
  height: 50px;
  background-color: #fff;
  color: var(--black);
  font-size: 1.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  border: 3px solid var(--dark-green);
}
.account .content {
  margin: 0;
  margin-left: 10px;
}
.account h3 {
  margin-bottom: 0;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 300;
}
.account h2 {
  margin-bottom: 0;
  padding: 0;
  font-size: 1.2rem;
}
.acount-balances {
  margin-top: 20px;
}
.acount-balances .container {
  color: #fff;
  background-color: var(--bg-rgba-blue);
  padding: 30px;
  border-radius: 5px;
}
.acount-balances .container .area-general-infos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
}
.acount-balances h3 {
  font-weight: 300;
  font-size: 1.3rem;
}
.acount-balances .container .area-general-infos h2 {
  font-size: 1.5rem;
}

.my-accounts {
  padding-top: 20px;
}
.my-accounts .account {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.my-accounts .account .head {
  display: flex;
  justify-content: start;
  align-items: center;
}
.my-accounts .account .head i {
  border: none;
}
.my-accounts .account .head h4 {
  font-weight: 300;
  margin-bottom: 0;
  font-size: 1.2rem;
}
.my-accounts .account .head h5 {
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 0;
}
.my-accounts .account .body h6 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-bottom: 0;
}
.my-accounts button {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  display: inline-block;
  width: 100%;
  padding: 10px 15px;
  text-transform: uppercase;
  margin-top: 20px;
  font-weight: bold;
  transition: all 0.3s;
}
.my-accounts button:hover {
  background-color: #fff;
  color: var(--bg-light-blue);
}
.list-account label {
  padding: 10px;
  border: 2px solid var(--bg-blue);
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  display: inline-block;
}
.list-account input {
  display: none;
}
.list-account input:checked + label {
  background-color: var(--lightness);
}
</style>