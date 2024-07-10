<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>

  <div class="ur-header-wrapper">
    <div class="navbar ur-header">
      <div class="navbar-start">
        <details class="dropdown">
          <summary tabindex="0" role="button" class="btn btn-ghost md:hidden ur-burguer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </summary>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>Premios</a></li>
            <li><a>Ranking</a></li>
          </ul>
        </details>

        <RouterLink to="/">
          <img src="@/assets/logo.png" class="h-12 md:h-14 lg:h-16">
        </RouterLink>
      </div>
      <div class="navbar-center hidden md:flex">
        <ul class="menu menu-horizontal px-1" style="color: #fff; font-size: 16px; font-weight: bold;">
          <li><a>Home</a></li>
          <li><a>Premios</a></li>
          <li><a>Ranking</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <RouterLink class="btn btn-neutral text-xl lg:text-2xl" to="/play">JUGAR</RouterLink>
      </div>
    </div>
  </div>

  <section class="pt-20 p-4 antialiased md:pt-32 md:p-8 lg:pt-32 lg:p-10" style="background: #E5E7EB;">

    <div class="lg:flex">

      <div class="p-4 bg-white md:p-8" style="flex: 1;">

        <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
          Crea tu cuenta
        </h1>

        <p class="text-sm font-light text-gray-500">
          Ya tienes una cuenta? <a href="#" class="font-medium text-primary hover:underline">Ingresa aquí</a>
        </p>

        <br>

        <div class="mb-6 grid grid-cols-2 gap-4">
          <div class="col-span-2 sm:col-span-1">
            <label for="full_name" class="mb-2 block text-sm font-medium text-gray-900">Email</label>
            <input type="text" id="full_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="name@flowbite.com" required />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900">Nombre y Apellido</label>
            <input type="text" id="card-number-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="Ingresa tu nombre y apellido" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label for="full_name" class="mb-2 block text-sm font-medium text-gray-900">Celular</label>
            <input type="text" id="full_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="Ingresa tu celular" required />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900">DNI</label>
            <input type="text" id="card-number-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="Ingresa tu DNI" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label for="full_name" class="mb-2 block text-sm font-medium text-gray-900">Colegio</label>
            <input type="text" id="full_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="Nombre del colegio" required />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900">Ciudad de Colegio</label>
            <input type="text" id="card-number-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="ejem. Lima" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
          </div>
        </div>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="">
          </div>
          <div class="ml-3 text-sm">
            <label for="terms" class="font-light text-gray-500">Al registrarme acepto los <a class="font-medium text-primary hover:underline" href="#">Términos y condiciones</a></label>
          </div>
        </div>

        <br>

        <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">Crear cuenta</button>
      </div>

      <div class="mt-6 grow sm:mt-8 lg:mt-0" style="flex: 1; background: linear-gradient(180deg, #3584E5 0%, #1D497F 100%);">
        <img
          src="@/assets/persons3.png"
          class="pt-20" />
      </div>
    </div>

  </section>

  <footer class="footer bg-neutral text-neutral-content p-10 ur-footer">
    <aside>
      <img src="@/assets/logo.png" class="h-12 md:h-14 lg:h-16">
      <p>
        Proyecto por la universidad de Piura
      </p>
    </aside>
    <nav>
      <h6 class="footer-title">Social</h6>
      <div class="grid grid-flow-col gap-4">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </nav>
  </footer>

</template>
