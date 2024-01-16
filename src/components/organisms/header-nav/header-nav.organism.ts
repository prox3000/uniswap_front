import {Vue} from 'vue-class-component';
import LangService from '@/services/lang.service';
import {LangInterface} from '@/interfaces/lang.interface';

export default class HeaderNavOrganism extends Vue {
    langs: LangInterface[] = [];

    data() {
        return {
            langs: null
        };
    }

    beforeCreate(): void {
        LangService.getLang().then((response: LangInterface[]) => {
            this.langs = response;
        });
    }
}