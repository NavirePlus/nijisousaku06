<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <div class="mb-5 md:mb-8 py-2 bg-indigo-500 rounded-lg">
        <h1 id="book" class="text-white text-2xl lg:text-3xl font-bold text-center">#にじそうさく06 頒布情報</h1>
      </div>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div class="group h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img :src="`${getPublicImagePath()}hyoushi.png`" @click="openModal({img_src: 'hyoushi.png'})" class="w-full h-full object-cover object-left-top inset-0 group-hover:scale-110 transition duration-200" />
          <image-modal :img_src="postImageItem" v-show="showImageModal" @close="closeModal" />
        </div>
  
        <div class="md:pt-8">
          <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
            新刊 『Tesoro mio』
          </h1>
  
          <h2 class="border-b text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">内容</h2>
          <p class="text-gray-600 sm:text-lg text-center md:text-left mb-6 md:mb-8 pl-2">
            ルイス・キャミー メインのイラスト本になります。<br />
            ※フルトイやハリオ家などのイラストも含みます
          </p>
  
          <h2 class="border-b text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">仕様</h2>
          <div class="text-gray-600 sm:text-lg text-center md:text-left mb-6 md:mb-8 pl-2">
            <ul class="list-none list-inside">
              <li>B5サイズ</li>
              <li>フルカラー</li>
              <li>本文8ページ</li>
            </ul>
          </div>

          <h2 class="border-b text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">価格</h2>
          <p class="text-gray-600 sm:text-lg text-center md:text-left mb-6 md:mb-8 pl-2">
            300円
          </p>

          <h2 class="border-b text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">頒布スペース</h2>
          <p class="text-gray-600 sm:text-lg text-center md:text-left mb-6 md:mb-8 pl-2">
            L-47
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <div class="mb-5 md:mb-8 py-2 bg-indigo-500 rounded-lg">
        <h2 id="samples" class="text-white text-2xl lg:text-3xl font-bold text-center">サンプル</h2>
      </div>
    
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        <div v-for="item in imageItems" :key="item.title" class="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative cursor-pointer">
          <img :src="getPublicImagePath() + item.img_src" @click="openModal(item)" :class="`w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition duration-200 ${item.show_obj_class}`" />
      
          <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
      
          <span class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">{{ item.title }}</span>
          <image-modal :img_src="postImageItem" v-show="showImageModal" @close="closeModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageModal from './ImageModal.vue'

export default {
  name: 'PageContent',
  components: {
    ImageModal
  },
  data() {
    return {
      showImageModal: false,
      postImageItem: '',
      imageItems: [
        {
          title: 'ルイス',
          img_src: 'sample1.png',
          show_obj_class: 'object-center'
        },
        {
          title: 'あまきゃみ',
          img_src: 'sample2.png',
          show_obj_class: 'object-center sm:object-left'
        },
        {
          title: 'フルトイ',
          img_src: 'sample3.png',
          show_obj_class: 'object-center'
        }
      ]
    }
  },
  methods: {
    getPublicImagePath() {
      if (process.env.VUE_APP_PUBLIC_IMAGE_PATH.startsWith('http')) {
        return `${process.env.VUE_APP_PUBLIC_IMAGE_PATH}events/nijisousaku06/`
      } else {
        return process.env.VUE_APP_PUBLIC_IMAGE_PATH
      }
    },
    openModal(item) {
      this.showImageModal = true
      this.postImageItem = this.getPublicImagePath() + item.img_src
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    },
    closeModal() {
      this.showImageModal = false
      document.getElementsByTagName('body')[0].style.overflow = 'visible'
    }
  }
}
</script>
