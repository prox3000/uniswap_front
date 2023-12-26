import { Vue } from "vue-class-component";

export default class LoginPage extends Vue {
    public isShow: boolean = false;

    isShowPassword() {
        this.isShow = !this.isShow;
    }
}