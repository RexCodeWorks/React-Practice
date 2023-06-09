// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 4 },
        { name: 'Grape', color: 'bg-purple-500', score: 2 },
        { name: 'Blueberry', color: 'bg-blue-500', score: 1 },
        { name: 'Strawberry', color: 'bg-red-500', score: 3 },
        { name: 'Kiwi', color: 'bg-green-500', score: 4 },
        { name: 'Pineapple', color: 'bg-yellow-500', score: 5 },
        { name: 'Mango', color: 'bg-yellow-500', score: 5 },
        { name: 'Watermelon', color: 'bg-green-500', score: 4 },
        { name: 'Cantaloupe', color: 'bg-orange-500', score: 3 },
        { name: 'Honeydew', color: 'bg-green-500', score: 4 },
        { name: 'Peach', color: 'bg-orange-500', score: 3 },
    ];

    const config = [
        {
            label: 'Fruit',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    );
}

export default TablePage;