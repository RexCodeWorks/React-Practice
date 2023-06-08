import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: '1',
            label: 'Can I use React on a project?',
            content: 'Yes you can'
        },
        {
            id: '2',
            label: 'Can I stay here?',
            content: 'Sure!'
        },
        {
            id: '3',
            label: 'Can you help me?',
            content: 'Yes'
        }
    ];

    return <Accordion items={items} />
}

export default AccordionPage;