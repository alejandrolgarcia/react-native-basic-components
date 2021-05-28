import { MenuItem } from '../interfaces/interfaces';


export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'apps-outline',
        component: 'Animation101Screen' 
    },

    {
        name: 'Animation 102',
        icon: 'card-outline',
        component: 'Animation102Screen' 
    },

    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen' 
    },

    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen' 
    },

    {
        name: 'TextInputs',
        icon: 'text-outline',
        component: 'TextInputScreen' 
    },

    {
        name: 'Pull to refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen' 
    },

    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'CustomSectionList' 
    },

    {
        name: 'Modal',
        icon: 'copy-outline',
        component: 'ModalScreen' 
    },

    {
        name: 'Infinite Scroll',
        icon: 'download-outline',
        component: 'InfiniteScrollScreen' 
    },

    {
        name: 'Slides',
        icon: 'enter-outline',
        component: 'SlidesScreen' 
    },

    {
        name: 'Settings',
        icon: 'settings-outline',
        component: 'SettingsScreen' 
    }

]