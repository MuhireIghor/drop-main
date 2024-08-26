import { atom } from "recoil";
import { TabState, UserROles } from "../types/urls";

export const activeTabState = atom<"login" | "selectOption">({
    key: 'ActiveTab',
    default: "selectOption"
});
export const activeLinkState = atom<UserROles>({
    key: 'activeLink',
    default: UserROles.HOME
})
export const activeRecentesTabState = atom<TabState>({
    key: 'activeRecentesTab',
    default: TabState.Anúncios
})