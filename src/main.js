// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import {
    Toast,
    Card,
    Button,
    Tabbar,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Overlay,
    CouponCell,
    CouponList,
    TabbarItem,
    Icon,
    Row,
    Col,
    TreeSelect,
    Sidebar,
    Search,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Image,
    Sticky,
    Popup,
    Cell,
    Tab,
    Tabs,
    Checkbox,
    CheckboxGroup,
    SubmitBar
} from 'vant';

Vue.use(Tabbar)
    .use(SubmitBar)
    .use(Card)
    .use(Checkbox).use(CheckboxGroup)
    .use(TabbarItem)
    .use(Button)
    .use(Icon)
    .use(Search)
    .use(Swipe)
    .use(SwipeItem)
    .use(Grid)
    .use(GridItem)
    .use(Image)
    .use(Sticky)
    .use(Popup)
    .use(Cell)
    .use(Tab)
    .use(Tabs)
    .use(TreeSelect)
    .use(Sidebar)
    .use(Row)
    .use(Col)
    .use(CouponCell)
    .use(CouponList)
    .use(Overlay)
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton)
    .use(Toast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})