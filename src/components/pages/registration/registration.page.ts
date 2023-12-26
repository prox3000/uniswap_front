import { Vue } from "vue-class-component";

export default class RegistrationPage extends Vue {
    public isShow: boolean = false;
    public isShowConf: boolean = false;

    isShowPassword() {
        this.isShow = !this.isShow;
    }

    isShowPasswordConf() {
        this.isShowConf = !this.isShowConf;
    }
}