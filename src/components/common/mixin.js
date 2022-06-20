
import {debounce} from "@/components/common/utils";
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        // 3.图片加载完成的事件监听
        let refresh = debounce(this.$refs.scroll.refresh,50)
        // 对监听的事件进行保存
        this.itemImgListener = ()=> {
            refresh()
        }
        this.$bus.$on('itemImgLoad',this.itemImgListener)
        // console.log('我是混入中的内容');
    }
}

