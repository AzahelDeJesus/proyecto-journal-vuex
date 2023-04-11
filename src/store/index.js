import journalModule from "@/modules/daybook/store/journal";
import { createStore } from "vuex";

export const store = createStore({
    modules: {
        journal: journalModule
    }
})