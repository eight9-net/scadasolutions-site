import { ref, onMounted, onUnmounted } from 'vue'

export function useGetImageUrl(file_path) {
  return new URL('/images/' + file_path, import.meta.url).href;
}
export function useGetFileUrl(file_path) {
  return new URL('/files/' + file_path, import.meta.url).href;
}
