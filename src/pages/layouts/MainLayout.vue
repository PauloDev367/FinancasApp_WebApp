<template>
  <div class="info">
    <slot></slot>
  </div>
  <footer>
    <ul>
      <li>
        <a href="/home" :class="{ active: isActive('/home') }">
          <i class="fa-solid fa-person-shelter"></i>
        </a>
      </li>
      <li>
        <a
          href="/cash-flow-page"
          :class="{ active: isActive('/cash-flow-page') }"
        >
          <i class="fa-solid fa-list-check"></i>
        </a>
      </li>
      <li>
        <a
          href="/add-entry"
          class="plus-icon"
          :class="{ active: isActive('/add-entry') }"
        >
          <i class="fa-solid fa-plus"></i>
        </a>
      </li>
      <li>
        <a href="/reports" :class="{ active: isActive('/reports') }">
          <i class="fa-solid fa-chart-simple"></i>
        </a>
      </li>
      <li>
        <a href="/configuration" :class="{ active: isActive('/configuration') }">
          <i class="fa-solid fa-gear"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>


<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const isActive = (path) => {
  const route = useRoute();
  return route.path === path;
};
</script>

<style scoped>
.info {
  padding: 20px;
  background-color: var(--bg-blue);
  margin-bottom: 100px;
}
footer {
  background-color: var(--black);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px 20px;
}
footer ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
footer ul li a {
  color: #fff;
}
footer ul li a:hover,
footer ul li a.active {
  color: var(--lightness);
}
footer ul li a i {
  font-size: 1.8rem;
}
footer ul li a.plus-icon i {
  background-color: #fff;
  color: var(--black);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  border-radius: 5px;
}
footer ul li a.plus-icon:hover > i {
  border-radius: 50%;
  background-color: var(--dark-green);
}
</style>