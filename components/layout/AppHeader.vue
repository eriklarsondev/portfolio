<template>
  <div>
    <header class="fixed z-50 top-0 left-0 w-full h-[70px] bg-black/80 backdrop-blur">
      <div class="container max-w-[1260px]">
        <div class="flex items-center gap-7 h-[70px]">
          <div class="flex-1">
            <Logo src="https://res.cloudinary.com/dst50wvgy/image/upload/v1741106159/logo_7136b0bd54.svg" />
          </div>

          <div>
            <Navbar class="lg:block hidden" />
            <MobileMenu class="lg:hidden block" />
          </div>
        </div>
      </div>
    </header>

    <div class="h-[70px]"></div>
  </div>
</template>
