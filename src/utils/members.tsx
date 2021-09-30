export let teamMembersArray: Array<{
    name: string;
    rank: string;
    description: string;
    memberImg: string;
    side?: 'left' | 'right';
    whichMargin?: number;
}> = [
    {
        name: 'ghosttly',
        rank: 'Członek',
        description: '„ No errors, no fun ” ',
        memberImg: '/images/teamMembersAvatars/ghosstly.svg',
    },
    {
        name: 'SMATEO40',
        rank: 'Członek',
        description:
            'Student 4 roku Automatyki i Robotyki na PB, interesuję się lotnictwem i techniką wojskową w wolnym czasie poznaję tajniki kodzenia',
        memberImg: '/images/teamMembersAvatars/smateo.png',
    },
    {
        name: 'Jędrek Dąborowski',
        rank: 'Wiceprzewodniczący',
        description: 'Student 3 roku Informatyki, Frontend Developer w Aexol, zainteresowania tenis i MTG',
        memberImg: '/images/teamMembersAvatars/jedrekDabrowski.jpg',
    },
    {
        name: 'Piotr Burzyński',
        rank: 'Przewodniczący',
        description: '',
        memberImg: '/images/teamMembersAvatars/piotrBurzynski.jpg',
    },
    {
        name: 'Krzysztof Biały',
        rank: 'Unicorn of code',
        description: 'Use span, not div.',
        memberImg: '/images/teamMembersAvatars/krzysiekBialy.jpg',
    },
    {
        name: 'Julia Napora',
        rank: 'Członek',
        description: 'Studentka 4 roku Inżynierii Biomedycznej',
        memberImg: '/images/teamMembersAvatars/juliaNapora.jfif',
    },
];
