import { ref, onMounted, onUnmounted } from 'vue'

export const useBreakpoint = (breakpoint) =>{
  const isWider = ref(false)

  function update() {
    isWider.value = window.innerWidth > breakpoint
  }

  onMounted(() => {
    update()
    window.addEventListener('resize', update)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })

  return { isWider }
}