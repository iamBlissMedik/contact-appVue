<script setup></script>
<template>
  <div class="h-screen w-[60px] bg-blue-800 flex flex-col items-center">
    <!-- home icon -->
    <div class="h-[50px] flex justify-center items-center">
      <a href="#">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
    </div>
    <!-- other icons -->
    <div class="h-[calc(100vh-50px)] flex flex-col justify-around">
      <div>
        <a href="#" class="nav-items">
          <i class="fa fa-home" aria-hidden="true"></i>
        </a>
      </div>
      <div>
        <a href="#" class="nav-items icon-3">
          <i class="fa fa-address-book" aria-hidden="true"></i>
        </a>
      </div>
      <div>
        <a href="#" class="nav-items">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
      </div>
      <div>
        <a href="#" class="nav-items">
          <i class="fa fa-cogs" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
div i {
  color: white;
  font-size: 25px;
}
</style>
