<template>
    <div class="calc-height relative">
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 grid-rows-3 calc-height px-10 w-full">
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="http://vite.dev" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/vite.svg" alt="Vite"
                        class="grayscale transition-g hover:grayscale-0 select-none w-16 h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Vite</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/nuxt.png" alt="Nuxt"
                        class="grayscale transition-g hover:grayscale-0 select-none w-16 h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Nuxt</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/bootstrap.png" alt="Bootstrap"
                        class="grayscale transition-g hover:grayscale-0 select-none w-18 h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Bootstrap</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://jquery.com" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/jquery.ico" alt="jQuery"
                        class="grayscale transition-g hover:grayscale-0 select-none w-16 h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">jQuery</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/vue.png" alt="VueJs"
                        class="grayscale transition-g hover:grayscale-0 select-none w-16 h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Vue</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://lesscss.org/" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/less.png" alt="Less"
                        class="grayscale transition-g hover:grayscale-0 select-none w-auto h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Less</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/sass.png" alt="Sass"
                        class="grayscale transition-g hover:grayscale-0 select-none w-16 h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Sass</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://www.linux.org" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/Tux.svg" alt="Linux"
                        class="grayscale transition-g hover:grayscale-0 select-none w-16 h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Linux</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://windows.com" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/windows.svg" alt="Windows"
                        class="grayscale transition-g hover:grayscale-0 select-none w-auto h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Windows</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/github.png" alt="github"
                        class="grayscale transition-g hover:grayscale-0 select-none w-auto h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Github</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/git.png" alt="git"
                        class="grayscale transition-g hover:grayscale-0 select-none w-auto h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Git</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https:/angular.dev" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/angular.png" alt="angular"
                        class="grayscale transition-g hover:grayscale-0 select-none w-auto h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Angular</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/tailwind.png" alt="tailwind"
                        class="grayscale transition-g hover:grayscale-0 select-none w-auto h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Tailwind</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://www.php.net" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/php.svg" alt="PHP"
                        class="grayscale transition-g hover:grayscale-0 select-none w-auto h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">PHP</h5>
                </a>
            </div>
            <div class="w-full px-5 py-5 bg-white/5 cursor-pointer rounded-lg h-fit backdrop-blur-sm" id="box2">
                <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer"
                    class="text-center flex flex-col items-center justify-center">
                    <img src="/wordpress.png" alt="Wordpress"
                        class="grayscale transition-g hover:grayscale-0 select-none w-16 h-16">
                    <h5 class="text-2xl text-white/60 transition-g mt-2">Wordpress</h5>
                </a>
            </div>
        </div>
        <div
            class="h-32 w-full absolute bottom-0 left-0 -z-10 bg-gradient-to-t from-green-500 to-gray-950 opacity-80 blur">
        </div>
    </div>
</template>
<style lang="scss">
.transition-g {
    transition: all 0.5s ease;
}

#box2 {
    &:hover {
        img {
            --tw-grayscale: grayscale(0);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
        }

        h5 {
            --tw-text-opacity: 1;
            color: rgb(255 255 255 / var(--tw-text-opacity));
        }
    }
}

.lines {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    margin: auto;
    width: 100%;
    z-index: -10;
}

.line {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;

    &::after {
        content: '';
        display: block;
        position: absolute;
        height: 15vh;
        width: 100%;
        top: -50%;
        left: 0;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
        animation: drop 7s 0s infinite;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    }

    &:nth-child(1) {
        margin-left: -15%;

        &::after {
            animation-delay: 2s;
        }
    }
    &:nth-child(4) {
        margin-left: -35%;

        &::after {
            animation-delay: 3s;
        }
    }
    &:nth-child(5) {
        margin-left: 35%;

        &::after {
            animation-delay: 3.5s;
        }
    }
    &:nth-child(3) {
        margin-left: 15%;

        &::after {
            animation-delay: 2.5s;
        }
    }
}

@keyframes drop {
    0% {
        top: -50%;
    }

    100% {
        top: 110%;
    }
}

;
</style>