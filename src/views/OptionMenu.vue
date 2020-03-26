<template>
  <section class="vertical-menu">
    <div class="flex">
      <div class="flex-initial bg-gray-300 rounded-md">
        <div>
          <div class="flex justify-center py-4">
            <img
              width="720"
              class="content-center h-22 w-32"
              src="../assets/img/logo.png"
              alt=""
            />
          </div>
          <div class="flex justify-center py-4">
            <img
              class="content-center h-16 w-16"
              src="../assets/img/avatar.png"
              alt=""
            />
          </div>

          <p class="text-base uppercase font-bold text-gray-800 py-2">
            John Doe
          </p>
        </div>
        <div class="flex justify-start w-2/4 px-4 py-10  m-12">
          <ul class="list-none px-2">
            <li class="bg-white py-4 px-6">
              <i class="fas fa-columns"></i>
              Dashboard
            </li>
            <li class="bg-white py-4"><i class="fas fa-cog"></i>Setting</li>
            <li class="bg-white py-4">
              <i class="fab fa-amazon-pay"></i>Option 1
            </li>
            <li class="bg-white py-4"><i class="fas fa-coins"></i>Option 2</li>
          </ul>
        </div>
        <div class="flex justify-start w-2/4 px-4 m-4">
          <i class="fas fa-sign-out-alt">Exit</i>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "OptionMenu"
};
</script>
