import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'management',
                title: 'Management',
                translate: 'NAV.MANAGEMENT',
                type: 'item',
                icon: 'dashboard',
                url: '/apps/management'
            },
        ]
    }
];
