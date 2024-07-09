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

        <img src="@/assets/logo.png" class="h-12 md:h-14 lg:h-16">
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

  <div class="hero bg-base-200 min-h-screen ur-hero" style="place-items: normal;">
    <div class="hero-content flex-col md:flex-row ur-hero-inner" style="justify-content: flex-start;">
      <div style="max-width: 746px; flex: 1;">
        <img src="@/assets/computer.png" class="w-4 md:w-6">
        <p class="py-4 text-lg md:text-xl" style="color: #F3F4F6;">
          Compite en nuestro emocionante juego
        </p>
        <img src="@/assets/logo-big.png" class="w-40 py-2 mx-auto md:mx-0 md:w-60 lg:w-80">
        <p class="py-6 text-base md:text-lg" style="color: #F3F4F6;">
          Experimienta una carrera y conoce el universo de la universidad de Piura. Un reto basado en tus habilidades para sortear los obstáculos de tu carrera universitaria y participa por emocionantes premios
        </p>
        <RouterLink class="btn btn-primary text-xl mt-2 lg:text-2xl" to="/play">Jugar Ahora</RouterLink>
      </div>
      <div style="flex: 1;">
        <!-- <img src="@/assets/persons.png" class="hidden md:block" style="width: 100%;" /> -->
      </div>
    </div>
  </div>

  <div class="hero my-20 md:my-32 ur-hero2-wrapper">
    <div class="hero-content flex-col lg:flex-row-reverse ur-hero2 md:py-8 lg:px-20">
      <div style="flex: 1;">
        <img
          src="@/assets/persons2.png" class="" style="width: 100%;" />
      </div>
      <div style="flex: 1;">
        <h1 class="text-5xl font-bold ur-hero2-title" style="color: #F3F4F6;">PARTICIPA POR EMOCIONANTES PREMIOS</h1>
        <p class="py-6" style="color: #F3F4F6;">
          Suba de nível e resgate recompensas! Procurando o Pacotão de Batalha? Adicione 25 níveis ao seu Passe de Batalha a qualquer momento!
        </p>
        <RouterLink class="btn btn-neutral text-xl lg:text-2xl" to="/play">Jugar</RouterLink>
      </div>
    </div>
  </div>

  <div class="hero bg-base-200">
    <div class="hero-content flex-col lg:flex-row" style="max-width: 100%; padding: 0;">
      <div style="flex: 1;">
        <div style="max-width: 600px; margin-left: 0; float: right; padding: 20px;">
          <h1 class="text-5xl font-bold ur-hero3-title">juega individual o con amigos</h1>
          <p class="py-6">
            Compite contra tu propio tiempo, o con amigos para hacerlo más divertido
          </p>
          <RouterLink class="btn btn-neutral text-xl lg:text-2xl" to="/play">Jugar Ahora</RouterLink>
        </div>
      </div>
      <div style="background: linear-gradient(180deg, #3584E5 0%, #1D497F 100%); flex: 1;">
        <img
          src="@/assets/persons3.png"
          class="pt-20" />
      </div>
    </div>
  </div>

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
