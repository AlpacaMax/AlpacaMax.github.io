import Link from 'next/link';

export default function NavLink({ name, tab, setTab, setTabContent }) {
    let onClick = () => {
        setTab(name);
        setTabContent();
    }

    return (
        <button
            className={name == tab ? "mx-2 px-6 py-3 bg-highlight text-black text-lg font-light shadow-[10px_10px_rgba(0,0,0,1)]" : "mx-2 px-6 py-3 hover:bg-text text-text hover:text-black text-lg font-light hover:shadow-[10px_10px_rgba(0,0,0,1)]"}
            onClick={ onClick }
        >
            { name }
        </button>
    )
}