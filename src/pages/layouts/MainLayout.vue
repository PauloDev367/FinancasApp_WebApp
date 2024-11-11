<template>
  <div class="info">
    <slot></slot>
  </div>
  <footer>
    <ul>
      <li>
        <a href="#" class="active">
          <i class="fa-solid fa-person-shelter"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-list-check"></i>
        </a>
      </li>
      <li>
        <a href="#" class="plus-icon">
          <i class="fa-solid fa-plus"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-chart-simple"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-bullseye"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.info {
  padding: 20px;
  background-color: var(--bg-blue);
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
footer ul li a.plus-icon:hover > i{
  border-radius: 50%;
  background-color: var(--dark-green);
}
</style>